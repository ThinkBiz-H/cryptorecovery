import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaDownload,
  FaTrash,
  FaEye,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaWallet,
  FaDollarSign,
  FaComment,
  FaSignOutAlt,
  FaChartLine,
  FaSpinner,
  FaCheckCircle,
  FaSearch,
  FaFilter,
  FaCalendar,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

function AdminDashboard() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    thisMonth: 0,
    recoveryTypes: {},
  });

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "contacts"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt || new Date().toISOString(),
      }));
      setContacts(data);
      calculateStats(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const calculateStats = (data) => {
    const now = new Date();
    const thisMonth = data.filter((item) => {
      const createdAt = new Date(item.createdAt);
      return (
        createdAt.getMonth() === now.getMonth() &&
        createdAt.getFullYear() === now.getFullYear()
      );
    }).length;

    const recoveryTypes = {};
    data.forEach((item) => {
      recoveryTypes[item.recoveryType] =
        (recoveryTypes[item.recoveryType] || 0) + 1;
    });

    setStats({
      total: data.length,
      thisMonth,
      recoveryTypes,
    });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    let filtered = contacts;
    if (searchTerm) {
      filtered = contacts.filter(
        (item) =>
          item.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.phone?.includes(searchTerm),
      );
    }
    setFilteredContacts(filtered);
    setCurrentPage(1);
  }, [searchTerm, contacts]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      fetchContacts();
      setShowDeleteConfirm(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin-login");
  };

  const downloadExcel = () => {
    const excelData = filteredContacts.map((item) => ({
      Name: `${item.firstName || ""} ${item.lastName || ""}`,
      Email: item.email || "",
      Phone: item.phone || "",
      Country: item.country || "",
      "Recovery Type": item.recoveryType || "",
      "Wallet Type": item.walletType || "",
      "Wallet Value": item.walletValue || "",
      Message: item.message || "",
      Date: new Date(item.createdAt).toLocaleDateString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const fileData = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
    saveAs(fileData, `contacts_${new Date().toISOString().split("T")[0]}.xlsx`);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContacts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="text-5xl text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Manage all contact form submissions
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-300"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Total Leads
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stats.total}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <FaUsers className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp animation-delay-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  This Month
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stats.thisMonth}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <FaChartLine className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp animation-delay-400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Avg. Response
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  24h
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <FaCheckCircle className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp animation-delay-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Download Report</p>
                <button
                  onClick={downloadExcel}
                  className="text-white font-semibold mt-2 flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Export Excel
                  <FaDownload className="text-sm" />
                </button>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <FaDownload className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 mb-6 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <FaFilter className="text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {filteredContacts.length} results
              </span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Contact</th>
                  <th className="p-4 text-left">Wallet</th>
                  <th className="p-4 text-left">Recovery</th>
                  <th className="p-4 text-left">Message</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 animate-fadeInUp"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <td className="p-4">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {item.firstName} {item.lastName}
                        </p>
                        <p className="text-xs text-gray-500">{item.country}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm flex items-center gap-1">
                          <FaEnvelope className="text-gray-400 text-xs" />
                          {item.email}
                        </p>
                        <p className="text-sm flex items-center gap-1 mt-1">
                          <FaPhone className="text-gray-400 text-xs" />
                          {item.phone}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm flex items-center gap-1">
                          <FaWallet className="text-gray-400 text-xs" />
                          {item.walletType}
                        </p>
                        <p className="text-sm flex items-center gap-1 mt-1">
                          <FaDollarSign className="text-gray-400 text-xs" />$
                          {item.walletValue}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                        {item.recoveryType}
                      </span>
                    </td>
                    <td className="p-4 max-w-[200px]">
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {item.message}
                      </p>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedContact(item)}
                          className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300"
                        >
                          <FaEye />
                        </button>
                        <button
                          onClick={() => setShowDeleteConfirm(item.id)}
                          className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredContacts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-gray-500 dark:text-gray-400">
                No contact data found
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg disabled:opacity-50 hover:bg-gray-200 transition"
              >
                <FaArrowLeft className="text-sm" />
                Previous
              </button>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg disabled:opacity-50 hover:bg-gray-200 transition"
              >
                Next
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* View Contact Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Contact Details
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-semibold">
                    {selectedContact.firstName} {selectedContact.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold">{selectedContact.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-semibold">{selectedContact.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Country</p>
                  <p className="font-semibold">{selectedContact.country}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Recovery Type</p>
                  <p className="font-semibold">
                    {selectedContact.recoveryType}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Wallet Type</p>
                  <p className="font-semibold">{selectedContact.walletType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Wallet Value</p>
                  <p className="font-semibold">
                    ${selectedContact.walletValue}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Message</p>
                <p className="mt-1 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  {selectedContact.message}
                </p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end">
              <button
                onClick={() => setSelectedContact(null)}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full">
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <FaTrash className="text-red-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Confirm Delete
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Are you sure you want to delete this contact? This action cannot
                be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(null)}
                  className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(showDeleteConfirm)}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}

export default AdminDashboard;

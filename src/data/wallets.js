const wallets = [
  {
    title: "Bitcoin Core",
    slug: "bitcoin-core",
    heroTitle: "Lost Access to Your Bitcoin Core Wallet? We Can Help.",
    happened:
      "Millions of Bitcoin Core users set up wallets between 2009 and 2015, often before robust password managers existed. Many used simple passwords they were confident they'd remember, or wrote them somewhere they can no longer find. According to Chainalysis, roughly 34% of all Bitcoin is sitting in wallets that haven't moved in years — many belonging to people in exactly your situation.",
    process:
      "When you engage us, you share your encrypted wallet.dat file and any password hints or partial details you can recall. Our air-gapped servers — permanently offline machines that cannot be accessed remotely — run specialized brute-force algorithms that systematically test password combinations based on your hints. We work from the outside in, using what you know about yourself to narrow the search space. We never need your actual password to begin, and we never have access to the internet during the process.",
    need: "We ask for your encrypted wallet.dat file, any clues about your original password (length, characters you typically used, phrases you favored), and the Bitcoin address associated with the wallet if you have it. That's it. We verify the wallet has funds before doing any heavy computation — no funds, no work, no charge.",
    timeline:
      "Some Bitcoin Core wallets are recovered within hours if the password was relatively simple. More complex cases — long, random passwords with no hints — can take weeks to months. We'll give you an honest initial estimate within the first week and keep you updated as we progress. We continue refining our techniques and sometimes succeed on cases we initially couldn't crack.",
  },

  {
    title: "Blockchain.com",
    slug: "blockchain-com",
    heroTitle: "Lost Access to Your Blockchain.com Wallet? We Can Help.",
    happened:
      "Blockchain.com accounts are protected by passwords, 2FA, and sometimes additional security layers — any of which can become a barrier when you've lost access. Unlike hardware wallets, Blockchain.com wallets are online accounts, which means account recovery involves different methods than offline wallet files. We've worked with Blockchain.com access issues extensively and understand the platform's security architecture well.",
    process:
      "For Blockchain.com wallets, recovery typically involves working from whatever account identifiers you can provide — your registered email address, your Wallet ID, partial password details, or your recovery phrase if you have it partially. Our team assesses your specific situation and designs a recovery approach tailored to your access credentials and what you remember.",
    need: "We'll need your Wallet ID or registered email, any partial password information you can recall, and details about what access you currently have (e.g., can you receive emails to the registered address?). The more context you can provide, the faster we can design an approach. We always verify funds are present before starting any intensive work.",
    timeline:
      "Blockchain.com recovery timelines depend heavily on what information you still have access to. Cases where you have the Wallet ID and a partial password are often resolved faster. Cases involving complete account lockout with no access to the recovery email take longer. Most clients hear from us with an initial assessment within the first week.",
  },

  {
    title: "MetaMask",
    slug: "metamask",
    heroTitle: "Lost Access to Your MetaMask Wallet? We Can Help.",
    happened:
      "MetaMask uses a 12-word Secret Recovery Phrase (sometimes called a seed phrase) as the master key to your wallet. The password you set in MetaMask itself only unlocks the extension on a specific device — it doesn't unlock the underlying wallet. This means the recovery path depends heavily on which piece of information you've lost, and what you still have access to.",
    process:
      "If you have your Secret Recovery Phrase but have forgotten your MetaMask password, you can restore the wallet yourself using MetaMask's built-in recovery. If you've lost your Secret Recovery Phrase but still have access to a device where MetaMask is still unlocked, that's a different situation — contact us and we'll walk you through options. If you've lost both, we can potentially help reconstruct partial seed phrases or attempt password recovery on encrypted vault files.",
    need: "For MetaMask recovery, we typically need your encrypted vault file (the data MetaMask stores locally on your device), details about your password or seed phrase (partial words, the order you remember, length), and the wallet address so we can verify funds are present before starting.",
    timeline:
      "MetaMask cases vary enormously. A forgotten password on a device where MetaMask is still installed is often resolved quickly. Partial seed phrase reconstruction with most words known can take days to weeks. Cases involving complete loss of both password and full seed phrase are the most challenging and may take considerably longer.",
  },

  {
    title: "Trust Wallet",
    slug: "trust-wallet",
    heroTitle: "Lost Access to Your Trust Wallet? We Can Help.",
    happened:
      "What Happened — and Why It's More Common Than You Think Trust Wallet is a non-custodial wallet — the company holds no copies of your keys or phrase. This is a security feature, but it means there's no 'forgot my password' button that calls a help desk. Recovery depends entirely on what information you still have. We've worked with many Trust Wallet users and understand the platform's key derivation and encryption mechanisms well.",
    process:
      "For Trust Wallet recovery, the path forward depends on your situation. If you have a partial recovery phrase — say, 10 of the 12 words — we can run recovery algorithms to identify the missing words. If you have the full phrase but scrambled the order, we can test permutations. If you have no phrase and have lost the device, the options are limited but we can discuss what's possible based on your specific details.",
    need: "We'll need to know how much of your recovery phrase you have, whether you have access to the original device the wallet was installed on, and the wallet's public address to confirm funds are present. We never need your complete phrase to begin an assessment — partial details are enough to evaluate your case.",
    timeline:
      "Cases with 10 or 11 of 12 words known are often resolved within days. Cases with fewer known words or scrambled phrase order take longer. We'll be transparent about your probability of success based on what you share with us in the initial consultation.",
  },

  {
    title: "Coinbase Defi Wallet",
    slug: "coinbase-defi-wallet",
    heroTitle: "Lost Access to Your Coinbase DeFi Wallet? We Can Help.",
    happened:
      "Many users lose access after changing devices, forgetting passwords, or misplacing recovery phrases.",
    process:
      "We review your wallet setup and available recovery information to determine potential recovery options.",
    need: "We'll ask about your recovery phrase, password information, and wallet address.",
    timeline:
      "Recovery time depends on the information available and the complexity of the case.",
  },

  {
    title: "Mycelium",
    slug: "mycelium",
    heroTitle: "Lost Access to Your Mycelium Wallet? We Can Help.",
    happened:
      "Mycelium users often face access issues after device loss, forgotten PINs, or incomplete backups.",
    process:
      "We evaluate available wallet backups and recovery phrase information using secure recovery techniques.",
    need: "We'll need details about your backup, recovery phrase, and wallet address.",
    timeline:
      "Recovery timelines vary based on the amount of information available.",
  },

  {
    title: "Multibit",
    slug: "multibit",
    heroTitle: "Lost Access to Your Multibit Wallet? We Can Help.",
    happened:
      "Many early Bitcoin adopters still hold funds in Multibit and Multibit HD wallets protected by forgotten passwords.",
    process:
      "We work with wallet files and password hints to perform secure offline password recovery attempts.",
    need: "We'll need your wallet file, password clues, and Bitcoin address.",
    timeline:
      "Simple password cases can be resolved quickly, while more complex passwords require additional time.",
  },

  {
    title: "Phantom",
    slug: "phantom-wallet",
    heroTitle: "Lost Access to Your Phantom Wallet? We Can Help.",
    happened:
      "Like most non-custodial wallets, Phantom stores your assets locally — Phantom Inc. holds no copies of your keys. Your 12-word or 24-word recovery phrase is the only master key to your wallet. If you have a partial phrase or have lost the device with Phantom still unlocked, recovery may still be possible.",
    process:
      "For Phantom recovery, the approach depends on your situation. If you have most of your seed phrase but are missing one or two words, we can run recovery algorithms to find them. If the phrase order is scrambled, we can test permutations. If you have your device but have forgotten your password, options depend on whether Phantom remains unlocked in the background.",
    need: "We'll need details about what portion of your recovery phrase you have, whether you have access to your original device, and your Solana wallet address so we can verify funds and NFTs are present. The initial consultation is free — we'll tell you honestly what your recovery chances look like based on your details.",
    timeline:
      "Phantom seed phrase recovery with most words known is typically one of our faster case types. Full phrase reconstruction from scratch is significantly harder. We'll give you an honest probability estimate in the initial consultation based on your specific situation.",
  },

  {
    title: "Electrum",
    slug: "electrum",
    heroTitle: "Lost Access to Your Electrum Wallet? We Can Help.",
    happened:
      "Electrum uses strong AES encryption to protect wallet files, and unlike some newer wallets, there is no cloud backup or seed-phrase-based recovery once your wallet file password is lost — the encrypted file is the only path. We've worked extensively with Electrum's encryption format and have developed specialized recovery approaches for it.",
    process:
      "Electrum wallet recovery follows the same process as Bitcoin Core: you share your encrypted wallet file, provide any password hints you can recall, and our offline servers run systematic password searches based on those hints. We verify your wallet address has funds before starting intensive computation. Your file never touches the internet during this process.",
    need: "We need your Electrum wallet file (typically named 'default_wallet' stored in a hidden Electrum folder on your computer), any password clues you remember, and your Bitcoin address. If you're not sure where the wallet file is located, we can guide you through finding it on Windows, Mac, or Linux.",
    timeline:
      "Simple or short passwords are often recovered within hours. Passwords that were longer or more complex — especially if you have limited clues — can take weeks. We keep working on difficult cases using evolving techniques. Most clients get an initial update within the first week.",
  },
];

export default wallets;

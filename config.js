module.exports = {
  /** Site MetaData (Required all)*/
  title: `Dev.Log`,                           // (* Required)
  description: `development & study log by Taegyu Kim`,          // (* Required)
  author: `Taegyu Kim`,                         // (* Required)
  siteUrl: 'https://taegyukim.github.io',                      // (* Required)
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: 'profile.jpeg', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Eager to leran',
  name: 'Taegyu Kim',
  company: '',
  location: 'Korea',
  email: 'dev.tgkim@gmail.com',
  website: 'https://taegyukim.github.io',                                // ex.'https://junhobaik.github.io'
  linkedin: 'https://www.linkedin.com/in/kim-taegyu-31685718a/',         // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: 'https://www.facebook.com/taegyu.kim.503',                   // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: '',                                                         // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/taegyukim',                                // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: '',            // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: '',     // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: '', // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: '',   // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: '', // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};

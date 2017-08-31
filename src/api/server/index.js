 
const API = {
  logos: [
    {
      url: 'http://www.dell.com',
      image: 'DELL.svg',
    },
    {
      url: 'https://www.dellemc.com/',
      image: 'DELLEMC.svg',
    },
    {
      url: 'http://pivotal.io/',
      image: 'PIVOTAL.svg',
    },
    {
      url: 'https://www.rsa.com/',
      image: 'RSA.svg',
    },
    {
      url: 'https://www.secureworks.com/',
      image: 'SECUREWORKS.svg',
    },
    {
      url: 'http://www.virtustream.com/',
      image: 'VIRTUSTREAM.svg',
    },
    {
      url: 'http://www.vmware.com/',
      image: 'VMWARE.svg',
    },

  ],
  watch: [
    {
    image: 'howtoheadset2.svg',
    title: 'The App + Headset',
    description: 'Download the app on your mobile device and use a VR headset for the ultimate experience.',
    },
    {
    image: 'howtomobile.svg',
    title: 'Mobile 360º',
    description: 'Explore this site directly on your mobile device. Use a VR headset for an enhanced experience.',
    },
    {
    image: 'howtodesktop.svg',
    title: 'Desktop 360º',
    description: 'Simply view the experience from your desktop device. Click and drag on the video to look around in full 360º.',
    },
  ],
  videos: [
    {
      slug: 'OTTOMotors',
      id: 'ca951f9f896eed156b0a04de8088c2d9',
      title: 'Accelerate Change',
      breadcrumb: 'Accelerate: OTTO Motors Experience',
      description: 'OTTO Motors designs and manufactures autonomous robotic solutions for industrial use. <br/><br/>See how Dell Technologies is facilitating the necessary communications signals for  their self-driving vehicles.',
      background: 'videoStills/OTTOVR-1440.jpg',
      capture: 'videoStills/OTTOVR-1366.jpg',
      thumb: 'videoStills/OTTOVR-534.jpg',

    },
    {
      slug: 'LonelyWhale',
      id: '3c63cac7d7c7f35360526b74777268e8',
      title: 'Swim with Whales',
      breadcrumb: 'Cry Out: The Lonely Whale Experience',
      description: 'Dell and Lonely Whale Foundation are doing their part to protect the seas by intercepting plastic before it enters our oceans and putting it to use in Dell product packaging.',
      background: 'videoStills/TLW-1440.jpg',
      capture: 'videoStills/TLW-1366.jpg',
      thumb: 'videoStills/TLW-534.jpg',
    },
    {
      slug: 'ACL',
      id: '2bc59bbf143a7517fcf9ac2e148a564a',
      title: 'Rock Out Backstage',
      breadcrumb: 'ACL: Backstage Tour',
      description: 'The longest-running music television series, Austin City Limits is shot at the ACL Moody Theater and powered by Dell Technologies. Go behind the scenes of this cutting-edge music venue.',
      background: 'videoStills/ACLVR-1440.jpg',
      capture: 'videoStills/ACLVR-1366.jpg',
      thumb: 'videoStills/ACLVR-534.jpg',
    },
  ],
  getAllVideos: function() {return this.videos},
  getOneVideo: function(slug) {
    const isVideo = v => v.slug === slug;
    return this.videos.find(isVideo);
  },
  getAllWatch: function() {return this.watch},
  getAllLogos: function() {return this.logos},
}

export default API

 
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
    image: 'howtoheadset.svg',
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
      slug: 'accelerate-change',
      title: 'Accelerate Change',
      description: 'Otto Motors designs and manufactures autonomous robotic solutions for industrial use. See how Dell Technologies is facilitating the necessary communications signals for  their self-driving vehicles.',
      background: 'otto.jpg',
      capture: 'placeholders/1366x984.png',
      thumb: 'placeholders/534x316.png',

    },
    {
      slug: 'swim-with-whales',
      title: 'Swim with Whales',
      description: 'Adrian Grenier partnered with Dell Technologies to create a VR experience that transports viewers into the depths of the sea to draw awareness to how pollution has disrupted underwater life.',
      background: 'whales.jpg',
      capture: 'placeholders/1366x984.png',
      thumb: 'placeholders/534x316.png',
    },
    {
      slug: 'rock-out-backstage',
      title: 'Rock Out Backstage',
      description: 'The longest-running music television series, Austin City Limits is shot at the ACL Moody Theater and powered by Dell Technologies. Go behind the scenes of this cutting-edge music venue.',
      background: 'rockout.jpg',
      capture: 'placeholders/1366x984.png',
      thumb: 'placeholders/534x316.png',
    },
  ],
  getAllVideos: function() { return this.videos},
  getOneVideo: function(slug) {
    const isVideo = v => v.slug === slug;
    return this.videos.find(isVideo);
  },
  getAllWatch: function() {return this.watch},
  getAllLogos: function() {return this.logos},
}

export default API


const API = {
  logos: [
    {
      url: '',
      image: 'DELL.svg',
    },
    {
      url: '',
      image: 'DELLEMC.svg',
    },
    {
      url: '',
      image: 'PIVOTAL.svg',
    },
    {
      url: '',
      image: 'RSA.svg',
    },
    {
      url: '',
      image: 'SECUREWORKS.svg',
    },
    {
      url: '',
      image: 'VIRTUSTREAM.svg',
    },
    {
      url: '',
      image: 'VMWARE.svg',
    },

  ],
  watch: [
    {
    image: 'vrHeadset.svg',
    title: 'The App + Headset (Best)',
    description: 'Download the app and use a VR viewer for the ultimate experience.',
    },
    {
    image: 'mobile360.svg',
    title: 'Mobile 360 (Better)',
    description: 'Visit the mobile-optimizedsite on your phone. Using a VR viewer is recommended but not required.',
    },
    {
    image: 'desktop.svg',
    title: 'Desktop (Good)',
    description: 'Simply view the story and click to navigate. ',
    },
  ],
  videos: [
    {
      slug: 'accelerate-change',
      title: 'Accelerate Change',
      description: 'Otto Motors designs and manufactures autonomous robotic solutions for industrial use. See how Dell Technologies is facilitating the necessary communications signals for their self-driving vehicles.',
      background: 'otto.jpg'
    },
    {
      slug: 'swim-with-whales',
      title: 'Swim with Whales',
      description: 'Adrian Grenier partnered with Dell Technologies to create a VR experience that transports viewers into the depths of the sea to draw awareness to how pollution has disrupted underwater life.',
      background: 'whales.jpg'
    },
    {
      slug: 'rock-out-backstage',
      title: 'Rock Out Backstage',
      description: 'The longest-running music television series, Austin City Limits is shot at the ACL Moody Theater and powered by Dell Technologies. Go behind the scenes of this cutting-edge music venue.',
      background: 'rockout.jpg'
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

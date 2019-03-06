const data = {
  home: {
    image: 'https://andyjungyang.com/images/profile_image_1.jpg',
    title: 'Welcome to Andy Yang\u0027s Personal Website!',
    body: 'This is a place where I will put my experiences, contact info, and possibly a blog or some projects.',
  },
  resume: [
    {
      title: 'Mild Beast Games',
      date: 'Feb. 2019 - Current',
      position: 'Software Engineer',
      body: [
        'Develop JS web service for calculating game economics',
      ],
      location: 'New Jersey',
      image: 'https://pbs.twimg.com/profile_images/966391791137075200/lg2vjegS_400x400.jpg',
      border: 'dark',
    },
    {
      title: 'Amazon',
      date: 'Sep. 2017 - Nov. 2018',
      position: 'Software Development Engineer',
      body: [
        '\u2022 Developed full stack web services using Java, Javascript',
        '\u2022 Maintained data flow with SQL and AWS integration',
      ],
      location: 'Seattle, WA',
      image: 'https://d1qk1dikeufk31.cloudfront.net/images/icons/amazon-charts-logo.svg',
      border: 'primary',
    },
  ],
  contact: [
    {
      title: 'Phone',
      logo: 'fas fa-phone',
      color: 'info',
      content: '(929) 262-1824',
    },
    {
      title: 'Email',
      logo: 'far fa-envelope',
      content: 'andyjungyang@gmail.com',
    },
    {
      title: 'LindeIn',
      logo: 'fab fa-linkedin',
      color: 'primary',
      content: 'linkedin.com/in/andy-yang-16380691',
      isLink: true,
    },
    {
      title: 'GitHub',
      logo: 'fab fa-github',
      color: 'dark',
      content: 'github.com/andyjungyang',
      isLink: true,
    },
  ],
};

export default data;

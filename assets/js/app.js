const vm = new Vue({
    el: '#app',
    data() {
        return {
            test: 'Hello World!',
            top_menu: [
                {
                    name: "Skills",
                    link: "#skills"
                },
                {
                    name: "Work History",
                    link: "#work-history"
                },
                {
                    name: "Education",
                    link: "#education"
                },
                {
                    name: "Interest",
                    link: "#interest"
                }
            ],
            informations: {
                infos: [
                    {
                        icon: '<i class="far fa-envelope"></i>',
                        text: 'dinhthienphuoc1990@gmail.com',
                    },
                    {
                        icon: '<i class="fas fa-birthday-cake"></i>',
                        text: '16-12-1990',
                    },
                    {
                        icon: '<i class="far fa-flag"></i>',
                        text: 'Nha Trang City, Khanh Hoa Province',
                    },
                    {
                        icon: '<i class="fas fa-map-marked-alt"></i>',
                        text: '19 Nguyen Dinh Chieu Street, Vinh Phuoc Ward, Nha Trang City, Khanh Hoa Province',
                    },
                    {
                        icon: '<i class="fas fa-mobile-alt"></i>',
                        text: '0764.832.673',
                    }
                ],
                links: [
                    {
                        icon: '<i class="fab fa-facebook"></i>',
                        link: 'https://www.facebook.com/thienphuoc.dinh/',
                        title: 'Facebook Dinh Thien Phuoc'
                    },
                    {
                        icon: '<i class="fab fa-linkedin-in"></i>',
                        link: 'https://www.linkedin.com/in/%C4%91inh-ph%C6%B0%E1%BB%9Bc-ab462b188/',
                        title: 'Linkedin Dinh Thien Phuoc'
                    }
                ],
                summary: [
                    "I have about 3 years experience in <strong>HTML5/CSS3/JS, Bootstrap, JQuery, ReactJS, VueJS</strong>",
                    "4 years experience in <strong>PHP</strong> Web Application Development (<strong>Laravel, Wordpress, Magento</strong>)",
                    "1+ year experience in <strong>React Native</strong>, 1 year experience in Android (Kotlin)",
                    "1+ year experience in <strong>C#</strong> Windows Application Development",
                    "1+ year experience in <strong>NodeJS</strong> Crawler Data Application Development",
                    "5 year experience in <strong>Remote</strong> Working"
                ]
            },
            skills: [
                {
                    name: "Programming Languages And Tools",
                    skills: [
                        "HTML5/CSS3, Jquery, ReactJS, VueJS, NodeJS, SASS, LESS, Bootstrap, AngularJS",
                        "PHP Laravel Framework, Wordpress CMS, Magento e-Commerce CMS Platforms",
                        "React Native, Kotlin/Java with Android Studio",
                        "MySQL, Postgresql",
                        "Python",
                        "C# with Visual Studio"
                    ]
                },
                {
                    name: "Workflow",
                    skills: [
                        "Version Control/Git",
                        "Apache Subversion (SVN)",
                        "Agile Scrum"
                    ]
                },
                {
                    name: "Soft Skills",
                    skills: [
                        "Communication",
                        "Teamwork",
                        "Adaptability",
                        "Googling",
                        "Problem-Solving",
                        "Creativity",
                        "English reading and writing",
                        "Researching New Technology"
                    ]
                }
            ],
            work_history: [
                {
                    job: "Outsource Web - Mobile - PC Application Developer",
                    company: ' | <a href="https://hdpsolutions.com/" title="HPDSolution">HPDSolution</a>',
                    time_period: "2016 - now",
                    job_details: [
                        {
                            name: "Develop Vuaphapthuat.go.vn auto application - C#",
                            link: [{
                                title: "VPT Supporter",
                                link: "https://github.com/thienphuoc1990/AutoVPT"
                            }]
                        },
                        {
                            name: "Develop, deploy and manage website sell tour - Laravel & ReactJS",
                            link: [{
                                title: "TA VI VU",
                                link: "http://tavivu.net/"
                            }]
                        },
                        {
                            name: "Develop apartment management system mobile application - React Native (outsource of HPDSolution)",
                            link: [{
                                title: "Demo AMS",
                                link: "https://tsfr.io/join/fja3hw"
                            }]
                        },
                        {
                            name: "Develop allknow app mobile application - React Native (outsource of HPDSolution)",
                            link: [{
                                title: "Demo Allknow App",
                                link: "https://tsfr.io/join/ghy8su"
                            }]
                        },
                        {
                            name: "Develop Crawler data script by NodeJS (use Nightmare library) for crawl stock data from vietstock.vn, economic calendar"
                        },
                        {
                            name: "Develop websites with Laravel Framework",
                            link: [
                                {
                                    title: "Website Sinh Thành An",
                                    link: "http://www.sinhthanhan.com/"
                                },
                                {
                                    title: "Website Vận tải Hoàng Dương",
                                    link: "http://www.vantaihoangduong.vn/"
                                },
                                {
                                    title: "Website inspecco.com.vn",
                                    link: "http://www.inspecco.com.vn/"
                                },
                                {
                                    title: "Website chuyensivn.com",
                                    link: "https://chuyensivn.com/"
                                },
                                {
                                    title: "Website batdongsanminhchau.com",
                                    link: "http://batdongsanminhchau.com/"
                                }
                            ]
                        },
                        {
                            name: "Develop, deploy websites with Wordpress",
                            link: [
                                {
                                    title: "Website saigonso.vn",
                                    link: "http://saigonso.vn/"
                                },
                                {
                                    title: "Website sadoga.vn",
                                    link: "http://sadoga.vn/"
                                }
                            ]
                        }
                    ]
                },
                {
                    job: "Web - PC Application Developer, QA",
                    company: ' | <a href="https://ilearnvn.org/" title="ECEP Group">ECEP Group</a>',
                    time_period: "2015 - now",
                    job_details: [
                        {
                            name: "Participate in develop, QA and SEO e-commerce site with Magento CMS Platform",
                            link: [{
                                title: "Chợ Trực Tuyến",
                                link: "https://chotructuyen.co/"
                            }]
                        },
                        {
                            name: "Develop Crawler data script by NodeJS (use Nightmare library) for crawl book data for site Elib",
                            link: [{
                                title: "ECEP Elib",
                                link: "https://elib.ilearnvn.org/"
                            }]
                        },
                        {
                            name: "Develop Crawler data script by Java (use Jsoup library)"
                        },
                        {
                            name: "Participate in develop e-learning site with Chamilo LMS",
                            link: [{
                                title: "ECEP Virtual Campus",
                                link: "https://vcampus.ilearnvn.org/"
                            }]
                        }
                    ]
                },
                {
                    job: "Photoshop Technician",
                    company: ' | <a href="https://anhdulich.vn/" title="Anh San Viet Company">Anh San Viet Company</a>',
                    time_period: "2013 - 2015",
                    job_details: [
                        { name: "Edit customer photos" },
                        { name: "Print photos on silk, porcelain cup, piece of stone" },
                        { name: "Setting PC, Print" }
                    ]
                },
                {
                    job: "Tutor, Electrician",
                    company: false,
                    time_period: "2008 - 2013",
                    job_details: [
                        { name: "English tutor 3 years" },
                        { name: "Electrician 2 years" }
                    ]
                }
            ],
            education: [
                {
                    level: "Computer Science Bachelor Diploma",
                    school: "Open University",
                    time_period: "2008 - 2015",
                    address: "Ho Chi Minh City"
                },
                {
                    level: "Highschool",
                    school: "Chu Van An Highschool",
                    time_period: "2006 - 2008",
                    address: "Nha Trang City, Khanh Hoa Province"
                }
            ]
        }
    },
    created() {
        this.testing();
    },
    methods: {
        testing: function () {
            console.log(this.test);
        }
    }
});

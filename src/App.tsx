import { FC, useMemo, useEffect } from "react";
            import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
            import Header from "./common/Header/Header.tsx";
            import Home from "./pages/Home/Home.tsx";
            import "./App.css";
            import About from "./pages/About/About.tsx";
            import { HomeData } from "./common/types/HomeData.tsx";
            import { AboutData } from "./common/types/AboutData.tsx";
            import Contact from "./pages/Contact/Contact.tsx";
            import ContactData from "./common/types/ContactData.tsx";
            import Projects from "./pages/Projects/Projects.tsx";
            import NotFound from "./NotFound.tsx";
            import Project from "./pages/Project/Project.tsx";
                        
            const App: FC = () => {
            
            useEffect(() => {
                const userTheme = window.localStorage.getItem('theme')
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                document.body.classList.add(userTheme || systemTheme)
                localStorage.setItem('theme', userTheme || systemTheme)
            }, []);
            
              const ProjectOr404 = () => {
                const { slug } = useParams();
                  if (slug && userData.slugs.length > 0 && userData.slugs.some((s: { slug: string }) => s.slug === slug)) {
                      return <Project userData={userData} />;
                  } else {
                      return <NotFound />;
                  }
              };
                        
              const userData = useMemo(() => ({
                name: "Udaya Ram Sharma ",
                email: "usharma4501@gmail.com",
                phone: "+977-9749211580",
                company: "company",
                location: "Jhapa,Nepal",
                about: "Hello, I'm Udaya Ram Sharma, a passionate student at IOST, Tribhuvan University, driven by data science and the exploration of time, space, and multiverses, ready to tackle new challenges and make incredible things happen.",
                skills: ["Machine Learning","JavaScript","HTML","C","C++","React"],
                projects: [], 
                work: [],
                role: "USER",
                profession: "Software Engineer",
                services: [],
                slugs: []
              }),
              []
            );
            
            const homeData = useMemo(
                    () => ({
                      headerOne: "I'm Udaya Ram Sharma , a Software Engineer from Jhapa,Nepal",
                      descriptionOne: "Hello, I'm Udaya Ram Sharma, a passionate student at IOST, Tribhuvan University, driven by data science and the exploration of time, space, and multiverses, ready to tackle new challenges and make incredible things happen.",
                      profileImage: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/63407fbdc2d4ac5270385fd4_home-hero-image-paperfolio-webflow-template.svg",
                      sections: [                        {
                          type: "SKILL",
                          details: {
                            headerOne: "My broad set of services and skills",
                            order: 1
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const aboutData = useMemo(
                    () => ({
                      headerOne: "Hello, I'm Udaya Ram Sharma ",
                      iconOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b443e2bb8e12b5faf51a7_about-hero-rigth-image-paperfolio-webflow-template.png",
                      iconTwo: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b440128f648585c383865_about-hero-left-image-paperfolio-webflow-template.png",
                      iconThree: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b52d3639fb5250039e574_my-story-image-paperfolio-webflow-template.png",
                      headerTwo: "My story as a designer",
                      descriptionOne: "Hello, I'm Udaya Ram Sharma, a passionate student at IOST, Tribhuvan University, driven by data science and the exploration of time, space, and multiverses, ready to tackle new challenges and make incredible things happen.",
                      descriptionTwo: "Embarking on a journey fueled by curiosity and passion, I found solace in the world of code. From solving complex problems to creating user-friendly interfaces, every project has been a stepping stone in my development career. Continually learning and adapting, I've embraced new technologies and methodologies to build robust and efficient solutions. My path as a developer is more than a career; it's a lifelong pursuit of innovation, creativity, and technological advancement.",
                      sections: [
                        {
                          type: "STORY",
                          details: {
                            headerOne: "Designing since I was ? years old",
                            descriptionOne: "I started designing when I was ? years old. My first designs were for my school projects. I was fascinated by the idea of creating something that people can interact with. I studied design for 5 years in college and have been working as a designer for 3 years.",
                            bulletOne: "Passionate about design from a young age.",
                            bulletTwo: "Five years of design education, three professionally.",
                            bulletThree: "Strong advocate of user-centered design.",
                            imageOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b55bcb4baec57b75b66fd_desigining-experience-paperfolio-webflow-template.png",
                            order: 1
                          }
                        },
                        {
                          type: "RESUME",
                          details: {
                            headerOne: "Take a look at my resume",
                            order: 2
                          }
                        },
                        {
                          type: "VALUE",
                          details: {
                            headerOne: "the core values that drive my work.",
                            descriptionOne: "Steering the helm of my career is a deeply ingrained set of core values. These principles not only guide my work ethic but also shape the way I view and approach design. Let's delve into the convictions that drive my professional journey.",
                            values: [{"value":"HARD_WORK"},{"value":"TRANSPARENCY"},{"value":"INNOVATION"},{"value":"GROWTH"}],
                            order: 3
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const projectsPageData = useMemo(
                    () => ({
                      headerOne: "Projects",
                      descriptionOne: "Here are some of my recent projects. I've worked on a wide range of projects, from website and app design to branding and graphic design. Each project brings its own unique challenges and opportunities."
                    }),
                    []
                  );
            
            const contactData = useMemo(
                    () => ({
                      headerOne: "Contact Me",
                      descriptionOne: "Don't hesitate to get in touch! Whether you're looking for a design consult, interested in a collaboration, or just want to say hello, I'd be delighted to hear from you. I strive to respond promptly and look forward to our potential correspondence!",
                      sections: [
                        {
                          type: "FAQ",
                          details: {
                            headerOne: "Frequently Asked Questions",
                            descriptionOne: "From understanding my design process to discussing project timelines, I've gathered responses to questions often asked by clients and collaborators. If you can't find your answer here, feel free to reach out!",
                            faq: [{"question":"What is your design process?","answer":"My design process starts with understanding the client's needs, then moving onto research, ideation, prototyping, and finally, implementation.","id":"404"},{"question":"How long does a project usually take?","answer":"The duration of a project varies depending on its complexity and scope, but typically it ranges from a few weeks to a few months.","id":"405"},{"question":"Do you collaborate with other designers?","answer":"Yes, I often collaborate with other designers and believe that teamwork can lead to more innovative and comprehensive solutions.","id":"406"},{"question":"What types of projects do you work on?","answer":"I work on a wide range of projects, from website and app design to branding and graphic design. Each project brings its own unique challenges and opportunities.","id":"407"},{"question":"How can I contact you for a project?","answer":"You can reach out to me via the contact form on this website, or directly through email. I look forward to discussing how we can work together.","id":"408"}],
                            order: 1
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            return (
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route
                    path="/"
                    element={<Home userData={userData} pageData={homeData as HomeData} />}
                  />
                  <Route
                    path="/contact"
                    element={
                      <Contact
                        pageData={contactData as ContactData}
                        userData={userData}
                      />
                    }
                  />
                  <Route
                    path="/projects"
                    element={<Projects pageData={projectsPageData} userData={userData} />}
                  />
                  <Route
                    path="/about"
                    element={
                      <About pageData={aboutData as AboutData} userData={userData} />
                    }
                  />
                  <Route path="/:slug" element={<ProjectOr404 />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            );
          };
                    
          export default App;
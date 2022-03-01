import logo from './images/favicon.ico';
import './App.css';

function App() {
  return (
<html lang="en">
    <head>
        <title>Website of ds12a</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={logo} type="image/x-icon" />
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/zephyr/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="style.css" />
        <script src="particle_config.js" crossorigin="anonymous"></script>
    </head>
    <body data-bs-spy="scroll" data-bs-target="#navigation" data-bs-offset="100">
        <div class="gradient">
            <div class="container-fluid d-flex align-items-center justify-content-center" style="height: 90vh;">
                <div class="text-center">
                    <h1 id="title" class="text-light display-1" data-aos="fade-right" data-aos-duration="1000">
                        Hi there!
                    </h1>
                    <p id="title_description" class="text-light lead" data-aos="fade-left" data-aos-duration="1000">
                        Welcome to my website!
                    </p>
                    <br />
                    <br />
                    <br />
                    <div class="d-flex justify-content-center" data-aos="zoom-in-down" data-aos-easing="ease-in-linear" data-aos-duration="2000">
                        <p class="scroll text-light">Scroll Down</p>
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                    </div>
                </div>
            </div>
        </div>
        <nav id="navigation" class="navbar bg-dark sticky-top navbar-expand-md navbar-dark nav-pills">
            <div class="container-fluid" style="text-align: center;">
                <a class="navbar-brand" href="#">
                    <img src="./images/favicon.ico" alt="DS12a" width="32" height="32" class="rounded-circle d-inline-block align-text-center" />
                    ds12a
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <nav class="nav nav-pills flex-fill">
                        <a class="nav-link flex-fill text-light" href="#home"><i class="bi bi-house-door"></i> Home</a>
                        <a class="nav-link flex-fill text-light" href="#about_me"><i class="bi bi-person"></i> About Me</a>
                        <a class="nav-link flex-fill text-light" href="#quotes"><i class="bi bi-chat-square-quote"></i> Famous Quotes</a>
                        <a class="nav-link flex-fill text-light" href="#helpful_links"><i class="bi bi-link"></i> Helpful Links</a>
                    </nav>
                </div>
            </div>
        </nav>
        <div id="particles-js"></div>
        <br />
        <div class="container">
            <div class="card bg-dark bg-gradient mb-4 hover-shadow" data-aos="zoom-up-in">
                <div class="card-body">
                    <h1 class="card-title text-center" id="home">Home</h1>
                    <p class="card-text">
                        Hi there! This is the website of ds12a. Information here is posted for ease of access or for fun! As you can see, this site is mostly meaningless. I have populated this site with meaningless text and with some
                        slightly meaningful links.
                    </p>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed
                        viverra tellus in. Non tellus orci ac auctor augue mauris. Tempor nec feugiat nisl pretium fusce. Pellentesque pulvinar pellentesque habitant morbi tristique. Sodales ut etiam sit amet nisl purus in. Aliquam sem
                        fringilla ut morbi tincidunt augue. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Lectus nulla at volutpat diam ut venenatis tellus in. Netus et malesuada fames ac turpis egestas maecenas pharetra.
                        Maecenas ultricies mi eget mauris.
                    </p>
                    <p class="card-text">
                        Cras sed felis eget velit aliquet sagittis. Ut sem nulla pharetra diam sit amet. Ut consequat semper viverra nam libero justo. Sit amet consectetur adipiscing elit. Ac placerat vestibulum lectus mauris ultrices eros.
                        Feugiat scelerisque varius morbi enim nunc faucibus a. Elit ullamcorper dignissim cras tincidunt. Habitant morbi tristique senectus et. In aliquam sem fringilla ut morbi tincidunt augue. Morbi enim nunc faucibus a
                        pellentesque sit amet. Accumsan tortor posuere ac ut consequat semper viverra nam. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nunc
                        sed augue lacus viverra vitae congue eu consequat ac. Turpis massa tincidunt dui ut ornare lectus sit amet. Hendrerit dolor magna eget est lorem ipsum dolor sit. Ultrices eros in cursus turpis massa tincidunt dui ut
                        ornare. Non curabitur gravida arcu ac tortor. Urna porttitor rhoncus dolor purus non enim praesent. Diam maecenas sed enim ut.
                    </p>
                    <p class="card-text">
                        Fermentum dui faucibus in ornare quam viverra orci sagittis eu. At imperdiet dui accumsan sit amet nulla facilisi morbi. At risus viverra adipiscing at. Adipiscing at in tellus integer. Mattis vulputate enim nulla
                        aliquet. Risus nullam eget felis eget nunc lobortis mattis aliquam. Enim nec dui nunc mattis enim ut tellus elementum. Pharetra vel turpis nunc eget lorem dolor sed viverra. Dui sapien eget mi proin sed libero enim
                        sed. Tincidunt augue interdum velit euismod in. Leo vel fringilla est ullamcorper eget. Eu augue ut lectus arcu bibendum at varius vel. Turpis in eu mi bibendum neque egestas.
                    </p>
                    <p class="card-text">
                        Est lorem ipsum dolor sit amet consectetur adipiscing. Eleifend quam adipiscing vitae proin sagittis nisl. Praesent elementum facilisis leo vel fringilla est. Condimentum lacinia quis vel eros donec ac odio tempor.
                        Tincidunt dui ut ornare lectus sit amet est placerat in. Sed id semper risus in hendrerit. Sit amet consectetur adipiscing elit. Vitae nunc sed velit dignissim sodales ut eu sem. Sed risus ultricies tristique nulla
                        aliquet enim tortor. Posuere urna nec tincidunt praesent semper feugiat. Purus in massa tempor nec. Commodo odio aenean sed adipiscing. Quis lectus nulla at volutpat. Ipsum faucibus vitae aliquet nec ullamcorper sit
                        amet risus nullam. Massa enim nec dui nunc mattis enim ut tellus. Eget nunc lobortis mattis aliquam faucibus purus in.
                    </p>
                    <p class="card-text">
                        Consequat mauris nunc congue nisi vitae suscipit. Nisl tincidunt eget nullam non nisi est sit. Ut eu sem integer vitae justo eget magna. Mi quis hendrerit dolor magna eget. Elit ut aliquam purus sit amet luctus. Vel
                        fringilla est ullamcorper eget nulla facilisi etiam. Imperdiet sed euismod nisi porta lorem. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Sed risus pretium quam vulputate dignissim suspendisse in
                        est ante. Lacus laoreet non curabitur gravida arcu ac. Eget mauris pharetra et ultrices neque ornare aenean. Nisl tincidunt eget nullam non nisi est. In eu mi bibendum neque egestas congue. Curabitur vitae nunc sed
                        velit dignissim.
                    </p>
                </div>
            </div>
            <div class="card bg-dark bg-gradient mb-4" data-aos="fade-right">
                <div class="card-body">
                    <h1 class="card-title text-center" id="about_me"><i class="bi bi-code-square"></i> About Me</h1>
                    <p class="card-text">
                        I am _____ _____, a ______ at ____. Some things I enjoy include programming (specifically for Deep Learning/RL purposes) and problem-solving. I am an AMC 12 and USACO Silver competitor, though I hope to soon achieve
                        Platinum. My CS skills are almost completely self-taught.
                    </p>
                    <p class="card-text">Here are some additional things about me:</p>
                </div>
            </div>
            <div class="card bg-dark bg-gradient w-75 mx-auto" data-aos="fade-right">
                <div class="card-body">
                    <h1 class="card-title text-center"><i class="bi bi-code-square"></i> My Skills</h1>
                    <p class="card-text text-center">
                        The following are some of the things I have explored and know about.
                    </p>
                </div>
            </div>

            <br />
            <div class="card bg-dark bg-gradient text-white" data-aos="fade-down">
                <div class="card-body">
                    <h1 class="card-title text-center"><i class="bi bi-code"></i> Programming Languages</h1>
                    <br />
                    <div class="row">
                        <div class="col col-md mb-4">
                            <div data-aos="fade-down">
                                <h2 class="card-subtitle text-white">Python</h2>
                                <div class="progress">
                                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md mb-4">
                            <div data-aos="fade-down">
                                <h2 class="card-subtitle text-white">C++</h2>
                                <div class="progress">
                                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md mb-4">
                            <div data-aos="fade-down">
                                <h2 class="card-subtitle text-white">Java</h2>
                                <div class="progress">
                                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-md mb-4">
                            <div data-aos="fade-down">
                                <h2 class="card-subtitle text-white">JavaScript</h2>
                                <div class="progress">
                                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md mb-4">
                            <div data-aos="fade-down">
                                <h2 class="card-subtitle text-white">HTML</h2>
                                <div class="progress">
                                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md mb-4">
                            <div data-aos="fade-down">
                                <h2 class="card-subtitle text-white">CSS</h2>
                                <div class="progress">
                                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%;"></div>
                                </div>
                            </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col col-md mb-4">
                            <div data-aos="fade-down">
                                <h2 class="card-subtitle text-white">Octave</h2>
                                <div class="progress">
                                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 5%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <br/>
            <div class="card bg-dark bg-gradient text-white" data-aos="fade-down">
                <div class="card-body">
                    <h1 class="card-title text-center"><i class="bi bi-file-earmark-code-fill"></i> Programming Libraries</h1>
                    <br />
                    <div class="row">
                        <div class="col col-md mb-4">
                            <div data-aos="fade-down">
                                <h2 class="card-subtitle text-white">Pytorch</h2>
                                <div class="progress">
                                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md mb-4">
                            <div data-aos="fade-down">
                                <h2 class="card-subtitle text-white">Tensorflow</h2>
                                <div class="progress">
                                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md mb-4">
                            <div data-aos="fade-down">
                                <h2 class="card-subtitle text-white">React.js</h2>
                                <div class="progress">
                                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-md mb-4">
                            <div data-aos="fade-down">
                                <h2 class="card-subtitle text-white">Numpy/Pandas/Matplotlib</h2>
                                <div class="progress">
                                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%;"></div>
                                </div>
                            </div>
                        </div>
                     </div>
                    <br />
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <h2 class="card-title text-center">Competitive Programming</h2>
                            <p class="card-text">I am in USACO silver with goals of achieving USACO platnium.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <h2 class="card-title text-center">Basic Machine Learning</h2>
                            <p class="card-text">
                                Completed Andrew Ng's Intro to Machine Learning. Am eager to explore more ML! Interested in Pytorch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div class="card bg-dark bg-gradient w-75 mx-auto" data-aos="fade-right">
                <div class="card-body">
                    <h1 class="card-title text-center"><i class="bi bi-trophy-fill"></i> My Accomplishments</h1>
                    <p class="card-text text-center">
                        The following are some of my recent accomplishments.
                    </p>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <h2 class="card-title text-center">USACO Silver</h2>
                            <p class="card-text">
                                Qualified for USACO Silver in January 2021 with a full score on the Bronze contest.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <h2 class="card-title text-center">2022 AIME Qualifier</h2>
                            <p class="card-text">
                                Qualified for the 2022 AIME through the AMC 12.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div class="card bg-dark bg-gradient w-75 mx-auto" data-aos="fade-right">
                <div class="card-body">
                    <h1 class="card-title text-center"><i class="bi bi-tools"></i> Projects</h1>
                    <p class="card-text text-center">
                        The following are some of my projects. These are posted here for easy access to them.
                    </p>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <h2 class="card-title text-center">This Website</h2>
                            <p class="card-text">
                                A personal website for myself meant to give myself a presence on the internet.
                            </p>
                            <button class="btn btn-primary" onclick="alert('You are already here!')"><i class="bi bi-link-45deg"></i> View Site</button>
                            <a href="https://github.com/ds12a/ds12a.github.io/" role="button" target="_blank" class="btn btn-info"><i class="bi bi-github"></i> Github repository</a>
                        </div>
                    </div>
                </div>
                <br />
                <div class="col col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <h2 class="card-title text-center">STEM Passport</h2>
                            <p class="card-text">
                                A web app allowing users to mark locations as visited. Does not contain content because this project was halted before completion.
                            </p>
                            <a href="https://ds12a.github.io/STEM-Passport/" role="button" target="_blank" class="btn btn-primary"><i class="bi bi-link-45deg"></i> View App</a>
                            <a href="https://github.com/ds12a/STEM-Passport" role="button" target="_blank" class="btn btn-info"><i class="bi bi-github"></i> Github repository</a>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <div class="row">
                <div class="col col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <h2 class="card-title text-center">Quadratic Solver</h2>
                            <p class="card-text">
                                Feeling lazy? Use this site to solve those hairy looking quadratic equations!
                            </p>
                            <p class="card-text">
                                Wrote this to refresh my web programming skills.
                            </p>
                            <a href="https://ds12a.github.io/Quadratic-Solver/" role="button" target="_blank" class="btn btn-primary"><i class="bi bi-link-45deg"></i> View App</a>
                            <a href="https://github.com/ds12a/Quadratic-Solver" role="button" target="_blank" class="btn btn-info"><i class="bi bi-github"></i> Github reposiory</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-dark bg-gradient w-75 mx-auto" data-aos="fade-right">
                <div class="card-body">
                    <h1 class="card-title text-center" id="quotes">Some Not Very Famous Quotes</h1>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>
                                    Maecenas pretium porta lobortis. In varius, lorem id porta condimentum, lectus massa viverra magna, sit amet tempus erat ex id enim.
                                </p>
                                <footer class="blockquote-footer">ds12a</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>
                                    Aliquam ut rutrum ex. Ut accumsan nisl ultrices, posuere augue eget, convallis diam. Sed suscipit auctor purus in convallis.
                                </p>
                                <footer class="blockquote-footer">ds12a</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>
                                    Vivamus nunc augue, congue vel quam in, sollicitudin sollicitudin lectus. Duis leo leo, fringilla vel faucibus ac, varius non eros.
                                </p>
                                <footer class="blockquote-footer">ds12a</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>
                                    Cras pellentesque dignissim sapien sit amet aliquet. Aliquam varius commodo diam, at luctus metus interdum in.
                                </p>
                                <footer class="blockquote-footer">ds12a</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>
                                    Quisque tempor hendrerit lectus cursus feugiat. Mauris ut vulputate nisl.
                                </p>
                                <footer class="blockquote-footer">ds12a</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </p>
                                <footer class="blockquote-footer">ds12a</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>Quisque malesuada ante a orci mattis consectetur.</p>
                                <footer class="blockquote-footer">ds12a</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-dark bg-gradient w-75 mx-auto" data-aos="fade-right">
                <div class="card-body">
                    <h1 class="card-title text-center" id="helpful_links">Helpful Links</h1>
                    <p class="card-text text-center">Here are some links I find useful.</p>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <h2 class="card-title text-center">STEM Passport</h2>
                            <p class="card-text">
                                A web app allowing users to mark locations as visited. Does not contain content because this project was halted before completion.
                            </p>
                            <a href="https://ds12a.github.io/STEM-Passport/" role="button" target="_blank" class="btn btn-primary"><i class="bi bi-link-45deg"></i> View App</a>
                            <a href="https://github.com/ds12a/STEM-Passport" role="button" target="_blank" class="btn btn-info"><i class="bi bi-github"></i> Github reposiory</a>
                        </div>
                    </div>
                </div>
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <h2 class="card-title text-center">Competitive Programmer's Handbook</h2>
                            <p class="card-text">A ABSOLUTE MUST READ for programmers.</p>
                            <a href="https://cses.fi/book/book.pdf" role="button" target="_blank" class="btn btn-primary"><i class="bi bi-book"></i> View Book</a>
                            <a href="https://github.com/pllk/cphb" role="button" target="_blank" class="btn btn-info"><i class="bi bi-github"></i> Github reposiory</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md mb-4">
                    <div class="card bg-dark bg-gradient" data-aos="fade-down">
                        <div class="card-body">
                            <h2 class="card-title text-center">Github Profile Page</h2>
                            <p class="card-text">
                                My Github Profile Page. For ease of access.
                            </p>
                            <a href="https://github.com/ds12a" role="button" target="_blank" class="btn btn-primary"><i class="bi bi-github"></i> View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <footer>
        <br />
        <div class="container" id="bottom">
            <div class="card bg-dark bg-gradient" data-aos="fade-up">
                <div class="card-body">
                    <p class="card-text">
                        Built with the help of Jquery, Bootstrap 5, AOS, and Particles.js
                        <br />
                        <br />
                        Uses the Zephyr theme from Bootswatch.
                    </p>
                    <br />
                    <p class="card-text">Website built by ds12a &copy;2022</p>
                </div>
            </div>
        </div>
    </footer>
    <br />
    <script>
        AOS.init();
    </script>
    </body>
</html>
  );
}

export default App;

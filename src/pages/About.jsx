import { motion } from "framer-motion";
import { Download } from "lucide-react";

function About() {
  return (
    <section className="min-h-screen bg-[#020617] text-white px-8 lg:px-15 py-20">
      {/* HEADING */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-16"
      >
        About <span className="text-violet-500">Me</span>
      </motion.h1>
      {/*  top left*/}
      <div className="grid lg:grid-cols-2 gap-16 items-start mt-16">
        <div className="space-y-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Frontend Developer & BCA Student
            </h2>

            <p className="text-gray-400 text-lg leading-10">
              I am a passionate frontend developer currently pursuing BCA. I
              enjoy building modern, responsive, and user-friendly web
              applications using React.js, Tailwind CSS, and Node.js.
            </p>

            <p className="text-gray-400 text-lg leading-10 mt-8">
              My goal is to become a skilled full-stack developer and work on
              real-world projects that solve meaningful problems.
            </p>
          </div>

 <a
  href="/cv.pdf"
  download
  className="
  mt-10
  flex items-center justify-center gap-3
  px-5 py-4
  w-55 h-fit 
  rounded-2xl
  bg-gradient-to-r
  from-violet-600
  to-cyan-500
  text-white
  font-semibold
  hover:scale-105
  transition duration-300"
>
  <Download size={20} />

  Download CV
</a>


          {/*  buttom left */}
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10 h-fit">
            <h3 className="text-3xl font-bold mb-8">Education Details</h3>
            {/* item-1*/}
            <div className="relative ml-10 py-1">
              <div className="absolute left-2 top-0 h-full w-[2px] bg-violet-500/40"></div>
              <div className="relative flex items-center mb-16">
                <div className="w-5 h-5 rounded-full bg-violet-500 border-4 border-[#020617]"></div>

                <div className="ml-6">
                  <h6>2024 - Present</h6>
                  <h4 className="text-xl font-semibold">BCA (Pursuing)</h4>
                  <p className="text-gray-400">JG University, Ahmedabad</p>
                  <p className="text-gray-400">CGPA: 7.7/10</p>
                </div>
              </div>
            </div>
            {/* item-2*/}
            <div className="relative ml-10 py-1">
              <div className="absolute left-2 top-0 h-full w-[2px] bg-violet-500/40"></div>
              <div className="relative flex items-center mb-16">
                <div className="w-5 h-5 rounded-full bg-violet-500 border-4 border-[#020617]"></div>

                <div className="ml-6">
                  <h6>2022 - 2024</h6>
                  <h4 className="text-xl font-semibold">
                    Higher Secondary Education
                  </h4>
                  <p className="text-gray-400">
                    Green Valley International School, Morbi
                  </p>
                  <p className="text-gray-400">Percentage: 70%</p>
                </div>
              </div>
            </div>
            {/* item-3*/}
            <div className="relative ml-10 py-1">
              <div className="absolute left-2 top-0 h-full w-[2px] bg-violet-500/40"></div>
              <div className="relative flex items-center mb-16">
                <div className="w-5 h-5 rounded-full bg-violet-500 border-4 border-[#020617]"></div>

                <div className="ml-6">
                  <h6>2020 - 2022</h6>
                  <h4 className="text-xl font-semibold">Secondary Education</h4>
                  <p className="text-gray-400">
                    Green Valley International School, Morbi
                  </p>
                  <p className="text-gray-400">Percentage: 72.87%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  top right*/}
        <div className="space-y-16">
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10 h-fit">
            <h3 className="text-3xl font-bold mb-8">Personal Info</h3>

            <div className="space-y-5 text-lg">
              <p>
                <span className="font-semibold text-white">Name:</span>

                <span className="text-gray-400 ml-2">Kishan Bhimani</span>
              </p>

              <p>
                <span className="font-semibold text-white">D.O.B:</span>

                <span className="text-gray-400 ml-2">25th June 2006</span>
              </p>

              <p>
                <span className="font-semibold text-white">Email:</span>

                <span className="text-violet-400 ml-2">
                  kishanbhimani256@gmail.com
                </span>
              </p>

              <p>
                <span className="font-semibold text-white">Education:</span>

                <span className="text-gray-400 ml-2">BCA(Pursuing)</span>
              </p>

              <p>
                <span className="font-semibold text-white">Location:</span>

                <span className="text-gray-400 ml-2">
                  Ahmedabad, Gujarat, India
                </span>
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span>

                <span className="text-gray-400 ml-2">+91 9510800921</span>
              </p>
            </div>
          </div>
          {/*  buttom right-2*/}
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10 h-fit">
            <h3 className="text-3xl font-bold mb-8">My Goal</h3>

            <p className="text-xl font-semibold">
              To become a skill full Stack developer and work on the industrial
              products that solve the real world problems
            </p>
          </div>

          {/*  buttom right-2*/}

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10 h-fit">
            <h3 className="text-3xl font-bold mb-10">Strength</h3>

            <div className="space-y-8">
              {/* ITEM 1 */}

              <div className="flex items-center gap-6">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-5 h-5 bg-violet-500 blur-md opacity-50"></div>

                  <div className="relative w-4 h-4 rotate-45 rounded-sm border border-violet-300 bg-violet-500"></div>
                </div>

                <h2 className="text-2xl font-semibold text-violet-300">
                  Problem Solving
                </h2>
              </div>

              {/* ITEM 2 */}

              <div className="flex items-center gap-6">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-5 h-5 bg-violet-500 blur-md opacity-50"></div>

                  <div className="relative w-4 h-4 rotate-45 rounded-sm border border-violet-300 bg-violet-500"></div>
                </div>

                <h2 className="text-2xl font-semibold text-violet-300">
                  Clean Code
                </h2>
              </div>

              {/* ITEM 3 */}

              <div className="flex items-center gap-6">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-5 h-5 bg-violet-500 blur-md opacity-50"></div>

                  <div className="relative w-4 h-4 rotate-45 rounded-sm border border-violet-300 bg-violet-500"></div>
                </div>

                <h2 className="text-2xl font-semibold text-violet-300">
                  Team Collaboration
                </h2>
              </div>

              {/* ITEM 4 */}

              <div className="flex items-center gap-6">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-5 h-5 bg-violet-500 blur-md opacity-50"></div>

                  <div className="relative w-4 h-4 rotate-45 rounded-sm border border-violet-300 bg-violet-500"></div>
                </div>

                <h2 className="text-2xl font-semibold text-violet-300">
                  Quick Learner
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

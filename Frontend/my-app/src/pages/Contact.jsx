import {
  ArrowRight,
  AtSign,
  Compass,
  Globe,
  LifeBuoy,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  ShieldAlert,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import InstagramIcon from "../components/Instagram";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <section className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(255,90,31,0.12),transparent_45%)] p-8 sm:p-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.36em] text-orange-500">
                Contact
              </p>
              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                We’re Here <span className="text-orange-500">to Help</span>
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Have a question, need support, or want to partner with us? Reach out to us anytime — we’re always here for you.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
              <div className="flex items-center gap-4 text-slate-900">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-100 text-orange-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-orange-500">
                    Send Us a Message
                  </p>
                  <p className="mt-1 text-slate-600">
                    We’ll get back to you as soon as possible.
                  </p>
                </div>
              </div>

              <form className="mt-10 space-y-5">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Your Name</span>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition duration-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Email Address</span>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition duration-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Subject</span>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition duration-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Message</span>
                  <textarea
                    rows={5}
                    placeholder="Type your message here..."
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition duration-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 resize-none"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition duration-200 hover:bg-orange-600"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <p className="mt-5 text-center text-xs text-slate-500">
                🔒 Your information is safe with us.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
              <div className="flex items-center gap-4 text-slate-900">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-orange-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-900">
                    Get in Touch
                  </p>
                  <p className="mt-1 text-slate-600">
                    Reach us through any of these channels.
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-5">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-100 text-orange-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Phone</p>
                        <p className="mt-1 text-sm text-slate-600">+91 98765 43210</p>
                        <p className="text-xs uppercase tracking-[0.26em] text-slate-400">Mon - Sat: 9AM - 7PM</p>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-sky-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Email</p>
                      <p className="mt-1 text-sm text-slate-600">support@sakhiai.com</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Office</p>
                      <p className="mt-1 text-sm text-slate-600">
                        SakhiAI Foundation
                        <br />123 Safety Street, New Delhi, India - 110001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">WhatsApp</p>
                      <p className="mt-1 text-sm text-slate-600">+91 98765 43210</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-violet-600">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Partnerships & Collaborations</p>
                      <p className="mt-1 text-sm text-slate-600">collab@sakhiai.com</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    We’d love to work together for a safer tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="rounded-[2rem] bg-gradient-to-r from-orange-50 via-orange-100 to-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-600">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">
                    Need Immediate Help?
                  </p>
                  <p className="mt-2 text-base text-slate-700">
                    If you are in a dangerous situation or need urgent assistance, please use the emergency options.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-red-100 text-red-600">
                  <LifeBuoy className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900">Emergency SOS</p>
                  <p className="mt-1 text-sm text-slate-600">Call 112</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-100 text-orange-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900">Chat with AI Assistant</p>
                  <p className="mt-1 text-sm text-slate-600">Get instant guidance.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-100 text-sky-600">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900">Find Nearby Help</p>
                  <p className="mt-1 text-sm text-slate-600">View safe locations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">
              SakhiAI is committed to building a safer world for every woman.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-100 text-slate-600 transition hover:bg-orange-50 hover:text-orange-600">
                <InstagramIcon size={20} color="pink" />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-100 text-slate-600 transition hover:bg-orange-50 hover:text-orange-600">
                <Link2 className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-100 text-slate-600 transition hover:bg-orange-50 hover:text-orange-600">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-100 text-slate-600 transition hover:bg-orange-50 hover:text-orange-600">
                <AtSign className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Contact;


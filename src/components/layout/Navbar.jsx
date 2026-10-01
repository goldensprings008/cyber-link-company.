import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import cyberLinkLogo from "../../assets/Images/cyber-link-logo.png";
import {
  Home,
  Info,
  Code2,
  Camera,
  CalendarDays,
  Users,
  FolderKanban,
  Globe2,
  Sparkles,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Digital", path: "/digital", icon: Code2 },
  { name: "Media", path: "/media", icon: Camera },
  { name: "Events", path: "/events", icon: CalendarDays },
  { name: "Members", path: "/members", icon: Users },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Platforms", path: "/platforms", icon: Globe2 },
];

function CyberLinkBrand({ mobile = false }) {
  return (
    <Link
      to="/"
      className={`group flex items-center ${
        mobile ? "gap-2" : "gap-3"
      }`}
    >
      {/* Company logo */}
      <motion.div
        whileHover={{ rotate: -4, scale: 1.04 }}
        transition={{ duration: 0.25 }}
        className={`relative flex shrink-0 items-center justify-center rounded-xl border border-[#009090]/20 bg-white p-1 shadow-sm ${mobile ? "h-10 w-10" : "h-12 w-12"}`}
      >
        <img
          src={cyberLinkLogo}
          alt=""
          className="h-full w-full object-contain"
        />
      </motion.div>

      {/* Company Text */}
      <div className="relative min-w-0">
        <p
          className={`
            font-semibold tracking-[0.14em] text-white
            transition-colors duration-300
            ${mobile ? "text-xs" : "text-[11px]"}
          `}
        >
          <span className="text-[#f07000]">CYBER</span>{' '}
          <span className="text-[#009090]">LINK</span>
        </p>

        <p className={`whitespace-nowrap text-[7px] font-medium uppercase tracking-[0.06em] text-[#006b70] ${mobile ? "leading-[10px]" : "leading-[11px]"}`}>
          TECHNOLOGY IS A NECESSITY
        </p>
      </div>
    </Link>
  );
}

function DesktopNavItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className="relative"
    >
      {({ isActive }) => (
        <motion.div
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="relative flex items-center gap-2 rounded-full px-3 py-2"
        >
          {/* Animated active background */}
          {isActive && (
            <motion.div
              layoutId="desktop-active-nav"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
              className="
                absolute
                inset-0
                rounded-full
                border border-[#009090]/25
                bg-gradient-to-r from-[#009090]/15 via-[#009090]/10 to-[#f07000]/12
                shadow-[0_0_20px_rgba(240,112,0,0.1)]
              "
            />
          )}

          {/* Hover background */}
          {!isActive && (
            <motion.div
              className="
                absolute
                inset-0
                rounded-full
                bg-white/[0.03]
              "
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          )}

          {/* Icon */}
          <motion.span
            animate={{
              color: isActive ? "#006b70" : "#526158",
            }}
            whileHover={{
              color: "#007f83",
              rotate: 3,
            }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <Icon size={14} strokeWidth={1.8} />
          </motion.span>

          {/* Text */}
          <motion.span
            animate={{
              color: isActive ? "#007f83" : "rgba(32,40,33,0.68)",
            }}
            whileHover={{
              color: "#202821",
            }}
            transition={{ duration: 0.2 }}
            className="
              relative
              z-10
              whitespace-nowrap
              text-[11px]
              font-medium
              tracking-wide
            "
          >
            {item.name}
          </motion.span>

          {/* Active dot */}
          {isActive && (
            <motion.span
              layoutId="desktop-active-dot"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
              className="
                relative
                z-10
                ml-0.5
                h-1.5
                w-1.5
                rounded-full
                bg-[#f07000]
                shadow-[0_0_8px_rgba(240,112,0,0.9)]
              "
            />
          )}
        </motion.div>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          left-1/2
          top-4
          z-50
          hidden
          w-[calc(100%-2rem)]
          max-w-[1380px]
          -translate-x-1/2
          lg:block
        "
      >
        <nav
          className="
            flex
            h-[72px]
            items-center
            rounded-2xl
            border
            border-[#007f83]/15
            bg-[#ffffff]/90
            px-4
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            backdrop-blur-2xl
          "
        >
          {/* Brand */}
          <div className="shrink-0">
            <CyberLinkBrand />
          </div>

          {/* Divider */}
          <div className="mx-5 h-8 w-px bg-white/[0.08]" />

          {/* Navigation */}
          <div className="flex min-w-0 flex-1 items-center justify-center">
            <div className="flex items-center gap-0.5">
              {navigation.map((item) => (
                <DesktopNavItem
                  key={item.path}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-5 h-8 w-px bg-white/[0.08]" />

          {/* Quote Button */}
          <NavLink to="/quote" className="shrink-0">
            {({ isActive }) => (
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(240,112,0,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
                className={`
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-4
                  py-2.5
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border-[#f07000] bg-[#f07000] text-white shadow-[0_0_20px_rgba(240,112,0,0.4)]"
                      : "border-[#f07000]/40 bg-[#f07000]/10 text-[#f07000] hover:bg-[#f07000] hover:text-white hover:border-[#f07000]"
                  }
                `}
              >
                <Sparkles
                  size={14}
                  strokeWidth={1.9}
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                  "
                >
                  Quote
                </span>

                <motion.span
                  initial={{ x: 0, y: 0 }}
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={13} />
                </motion.span>
              </motion.div>
            )}
          </NavLink>
        </nav>
      </motion.header>

      {/* ================= MOBILE NAVBAR ================= */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          left-3
          right-3
          top-3
          z-50
          lg:hidden
        "
      >
        <nav
          className="
            relative
            rounded-2xl
            border
            border-[#007f83]/15
            bg-[#ffffff]/95
            shadow-[0_20px_60px_rgba(0,0,0,0.4)]
            backdrop-blur-2xl
          "
        >
          {/* Mobile Top Bar */}
          <div className="flex h-[62px] items-center justify-between px-4">
            <CyberLinkBrand mobile />

            {/* Menu Button */}
            <motion.button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              whileTap={{ scale: 0.92 }}
              className={`
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                transition-colors
                ${
                  mobileOpen
                    ? "border-[#f07000]/40 bg-[#f07000]/10 text-[#f07000]"
                    : "border-[#007f83]/15 bg-transparent text-[#202828]/50 hover:border-[#009090]/30 hover:bg-[#009090]/10 hover:text-[#009090]"
                }
              `}
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={19} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={19} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >
                <div className="border-t border-white/[0.06] px-3 pb-4 pt-3">
                  <div className="space-y-1">
                    {navigation.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          end={item.path === "/"}
                          onClick={() => setMobileOpen(false)}
                        >
                          {({ isActive }) => (
                            <motion.div
                              initial={{
                                opacity: 0,
                                x: -10,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay: index * 0.035,
                                duration: 0.2,
                              }}
                              whileTap={{
                                scale: 0.98,
                              }}
                              className="
                                relative
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                px-3
                                py-3
                              "
                            >
                              {/* Active background */}
                              {isActive && (
                                <motion.div
                                  layoutId="mobile-active-nav"
                                  transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 35,
                                  }}
                                  className="
                                    absolute
                                    inset-0
                                    rounded-xl
                                    border
                                    border-[#009090]/25
                                    bg-gradient-to-r
                                    from-[#009090]/15
                                    via-[#009090]/10
                                    to-[#f07000]/12
                                  "
                                />
                              )}

                              {/* Icon */}
                              <motion.span
                                animate={{
                                  color: isActive
                                    ? "#009090"
                                    : "rgba(32,40,40,0.45)",
                                }}
                                className="relative z-10"
                              >
                                <Icon
                                  size={17}
                                  strokeWidth={1.8}
                                />
                              </motion.span>

                              {/* Name */}
                              <span
                                className={`
                                  relative
                                  z-10
                                  flex-1
                                  text-xs
                                  font-medium
                                  tracking-wide
                                  ${
                                    isActive
                                      ? "text-[#007f83]"
                                      : "text-[#202828]/65"
                                  }
                                `}
                              >
                                {item.name}
                              </span>

                              {/* Active dot */}
                              {isActive && (
                                <motion.span
                                  layoutId="mobile-active-dot"
                                  transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 35,
                                  }}
                                  className="
                                    relative
                                    z-10
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-[#f07000]
                                    shadow-[0_0_10px_rgba(240,112,0,0.9)]
                                  "
                                />
                              )}
                            </motion.div>
                          )}
                        </NavLink>
                      );
                    })}
                  </div>

                  {/* Mobile Quote */}
                  <NavLink
                    to="/quote"
                    onClick={() => setMobileOpen(false)}
                    className="mt-3 block"
                  >
                    {({ isActive }) => (
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        className={`
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          border
                          px-4
                          py-3
                          font-semibold
                          transition-all
                          ${
                            isActive
                              ? "border-[#f07000] bg-[#f07000] text-white shadow-[0_0_20px_rgba(240,112,0,0.35)]"
                              : "border-[#f07000]/30 bg-[#f07000] text-white hover:bg-[#d96400]"
                          }
                        `}
                      >
                        <Sparkles size={15} />

                        <span
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                          "
                        >
                          Request a Quote
                        </span>

                        <ArrowUpRight size={14} />
                      </motion.div>
                    )}
                  </NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedExcavator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-cgh-charcoal overflow-hidden py-0">
      {/* Rich gradient background simulating dusk construction site */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a1008] to-[#0d0d0d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(200,16,46,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[550px] md:min-h-[650px]">
          {/* Left content */}
          <motion.div
            className="lg:w-2/5 text-center lg:text-left py-16 lg:py-0 z-20"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="inline-block text-cgh-yellow font-display text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Power in Motion
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[0.95] mb-6">
              Heavy{" "}
              <span className="text-cgh-red">Equipment,</span>
              <br />
              Serious{" "}
              <span className="text-cgh-yellow">Results.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Moving earth, shaping roads, building infrastructure that connects communities across Uganda.
            </p>
            {/* Animated stats bar */}
            <motion.div
              className="flex gap-8 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              {[
                { val: "200+", label: "KM Roads" },
                { val: "A-3", label: "Class" },
                { val: "3+", label: "Projects" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-display font-bold text-cgh-red">{s.val}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — 3D-style excavator */}
          <div className="lg:w-3/5 relative flex items-center justify-center">
            {isInView && (
              <motion.svg
                viewBox="0 0 900 550"
                className="w-full h-auto max-h-[550px]"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <defs>
                  {/* 3D body gradient */}
                  <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f0b830" />
                    <stop offset="40%" stopColor="#d8a020" />
                    <stop offset="100%" stopColor="#a07818" />
                  </linearGradient>
                  {/* Track gradient */}
                  <linearGradient id="trackGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2a2a2a" />
                    <stop offset="100%" stopColor="#111" />
                  </linearGradient>
                  {/* Window glass */}
                  <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1a4a7a" />
                    <stop offset="50%" stopColor="#0d2a4a" />
                    <stop offset="100%" stopColor="#0a2040" />
                  </linearGradient>
                  {/* Shadow */}
                  <radialGradient id="shadowGrad" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.4)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                  {/* Boom gradient */}
                  <linearGradient id="boomGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e8b828" />
                    <stop offset="100%" stopColor="#b08818" />
                  </linearGradient>
                  {/* Chrome / hydraulic */}
                  <linearGradient id="chromeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ccc" />
                    <stop offset="50%" stopColor="#888" />
                    <stop offset="100%" stopColor="#666" />
                  </linearGradient>
                  {/* Dirt */}
                  <linearGradient id="dirtGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8B5E14" />
                    <stop offset="100%" stopColor="#5a3a0a" />
                  </linearGradient>
                  {/* Ground gradient */}
                  <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3d2208" />
                    <stop offset="100%" stopColor="#1a0e04" />
                  </linearGradient>
                </defs>

                {/* Ground */}
                <motion.path
                  d="M0 440 Q150 435 300 440 Q450 445 600 438 Q750 432 900 440 L900 550 L0 550 Z"
                  fill="url(#groundGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                {/* Ground highlight line */}
                <motion.path
                  d="M0 440 Q150 435 300 440 Q450 445 600 438 Q750 432 900 440"
                  stroke="#C8102E"
                  strokeWidth="2.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
                />
                {/* Ground texture */}
                {[450, 465, 480, 495, 510].map((y, i) => (
                  <line key={y} x1="0" y1={y} x2="900" y2={y + 1} stroke="#2a1808" strokeWidth="0.5" opacity={0.6 - i * 0.1} />
                ))}

                {/* Ground shadow under machine */}
                <ellipse cx="440" cy="445" rx="160" ry="12" fill="url(#shadowGrad)" />

                {/* === EXCAVATOR BODY (enters from right) === */}
                <motion.g
                  initial={{ x: 250, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                >
                  {/* === TRACKS === */}
                  <g>
                    {/* Track body outline — 3D form */}
                    <path d="M310 408 L520 408 Q545 408 545 430 L545 445 Q545 460 520 460 L310 460 Q285 460 285 445 L285 430 Q285 408 310 408 Z" fill="url(#trackGrad)" stroke="#1a1a1a" strokeWidth="2" />
                    {/* Track face plate (3D depth) */}
                    <path d="M310 460 Q285 460 285 445 L285 430 Q285 408 310 408 L520 408 Q545 408 545 430" fill="none" stroke="#3a3a3a" strokeWidth="1" />
                    {/* Track pads */}
                    {Array.from({ length: 13 }).map((_, i) => (
                      <motion.rect
                        key={`tp-${i}`}
                        x={293 + i * 19}
                        y="410"
                        width="14"
                        height="48"
                        rx="2"
                        fill="none"
                        stroke="#333"
                        strokeWidth="1.5"
                        animate={{ stroke: ["#333", "#444", "#333"] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.05 }}
                      />
                    ))}
                    {/* Drive sprocket (rear) */}
                    <circle cx="520" cy="434" r="22" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="2" />
                    <circle cx="520" cy="434" r="14" fill="#222" stroke="#444" strokeWidth="1.5" />
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: "520px 434px" }}
                    >
                      {[0, 60, 120, 180, 240, 300].map((a) => (
                        <line key={a} x1="520" y1="424" x2="520" y2="444" stroke="#444" strokeWidth="1" transform={`rotate(${a} 520 434)`} />
                      ))}
                    </motion.g>
                    {/* Idler wheel (front) */}
                    <circle cx="310" cy="434" r="22" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="2" />
                    <circle cx="310" cy="434" r="14" fill="#222" stroke="#444" strokeWidth="1.5" />
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: "310px 434px" }}
                    >
                      {[0, 60, 120, 180, 240, 300].map((a) => (
                        <line key={a} x1="310" y1="424" x2="310" y2="444" stroke="#444" strokeWidth="1" transform={`rotate(${a} 310 434)`} />
                      ))}
                    </motion.g>
                    {/* Top rollers */}
                    {[370, 415, 460].map((cx) => (
                      <g key={cx}>
                        <circle cx={cx} cy="412" r="7" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
                        <circle cx={cx} cy="412" r="3" fill="#333" />
                      </g>
                    ))}
                  </g>

                  {/* === MAIN BODY === */}
                  <g>
                    {/* Body base — 3D trapezoid */}
                    <path d="M305 340 L535 340 L545 345 L545 405 L540 410 L290 410 L285 405 L285 345 Z" fill="url(#bodyGrad)" />
                    {/* Top highlight */}
                    <path d="M305 340 L535 340 L545 345 L285 345 Z" fill="rgba(255,255,255,0.15)" />
                    {/* Side shadow */}
                    <path d="M535 340 L545 345 L545 405 L540 410 L535 340" fill="rgba(0,0,0,0.15)" />
                    {/* Engine louvers */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <rect key={`louver-${i}`} x={460 + i * 12} y="355" width="8" height="30" rx="1" fill="rgba(0,0,0,0.15)" />
                    ))}
                    {/* Counterweight */}
                    <path d="M510 345 L545 345 L545 405 L540 410 L505 410 L505 350 Z" fill="#c08818" stroke="#a07015" strokeWidth="1" />
                    {/* Body stripe */}
                    <rect x="290" y="395" width="255" height="4" fill="#111" opacity="0.3" />
                  </g>

                  {/* === CAB === */}
                  <g>
                    {/* Cab body */}
                    <path d="M315 280 L410 280 L415 285 L415 340 L310 340 L310 285 Z" fill="url(#bodyGrad)" stroke="#b08818" strokeWidth="1" />
                    {/* Cab top highlight */}
                    <path d="M315 280 L410 280 L415 285 L310 285 Z" fill="rgba(255,255,255,0.2)" />
                    {/* Roof overhang */}
                    <rect x="305" y="272" width="118" height="12" rx="3" fill="#c89818" />
                    <rect x="305" y="272" width="118" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
                    {/* Front window */}
                    <path d="M318 290 L380 290 L380 330 L318 330 Z" fill="url(#glassGrad)" stroke="#1a3a5c" strokeWidth="1.5" rx="2" />
                    {/* Window reflections */}
                    <motion.rect
                      x="322" y="295" width="20" height="6" rx="2"
                      fill="rgba(100,180,255,0.12)"
                      animate={{ opacity: [0.05, 0.15, 0.05] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <rect x="322" y="305" width="30" height="1" fill="rgba(100,180,255,0.06)" />
                    {/* Side window */}
                    <rect x="385" y="290" width="25" height="35" rx="2" fill="url(#glassGrad)" stroke="#1a3a5c" strokeWidth="1" />
                    {/* Door line */}
                    <line x1="383" y1="290" x2="383" y2="338" stroke="#a07818" strokeWidth="1" />
                    {/* Door handle */}
                    <rect x="390" y="318" width="8" height="4" rx="2" fill="#8a6810" />
                    {/* Warning light */}
                    <motion.circle
                      cx="315" cy="270"
                      r="5"
                      animate={{
                        fill: ["#ff4400", "#ffaa00", "#ff4400"],
                        filter: ["drop-shadow(0 0 4px #ff4400)", "drop-shadow(0 0 8px #ffaa00)", "drop-shadow(0 0 4px #ff4400)"],
                      }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                    {/* Exhaust stack */}
                    <rect x="540" y="300" width="10" height="42" rx="4" fill="url(#chromeGrad)" />
                    <rect x="537" y="294" width="16" height="10" rx="3" fill="#777" />
                    {/* Smoke */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.circle
                        key={`sm-${i}`}
                        cx="545" cy="290"
                        r={5 + i * 4}
                        fill="none"
                        stroke={`rgba(160,160,160,${0.2 - i * 0.04})`}
                        strokeWidth="2"
                        animate={{
                          cy: [290, 230 - i * 30],
                          cx: [545, 560 + i * 10],
                          opacity: [0.2, 0],
                          r: [5 + i * 4, 18 + i * 8],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: 1.5 + i * 0.7,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                      />
                    ))}
                  </g>

                  {/* === BOOM ARM (Animated digging) === */}
                  <motion.g
                    animate={{ rotate: [0, -6, 2, -4, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "340px 320px" }}
                  >
                    {/* Hydraulic cylinder (boom) */}
                    <motion.line
                      x1="320" y1="295"
                      x2="240" y2="230"
                      stroke="url(#chromeGrad)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      animate={{ x2: [240, 235, 240], y2: [230, 225, 230] }}
                      transition={{ duration: 7, repeat: Infinity }}
                    />
                    <motion.line
                      x1="318" y1="297"
                      x2="242" y2="232"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      animate={{ x2: [242, 237, 242], y2: [232, 227, 232] }}
                      transition={{ duration: 7, repeat: Infinity }}
                    />

                    {/* Boom main arm — 3D with highlight */}
                    <line x1="340" y1="320" x2="195" y2="255" stroke="#a07818" strokeWidth="22" strokeLinecap="round" />
                    <line x1="340" y1="320" x2="195" y2="255" stroke="url(#boomGrad)" strokeWidth="18" strokeLinecap="round" />
                    <line x1="339" y1="318" x2="196" y2="254" stroke="rgba(255,255,255,0.1)" strokeWidth="5" strokeLinecap="round" />
                    {/* Boom pivot pin */}
                    <circle cx="340" cy="320" r="10" fill="#888" stroke="#666" strokeWidth="2" />
                    <circle cx="340" cy="320" r="4" fill="#555" />

                    {/* === STICK (forearm) === */}
                    <motion.g
                      animate={{ rotate: [0, 12, 3, 10, 0] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformOrigin: "195px 255px" }}
                    >
                      {/* Stick hydraulic */}
                      <motion.line
                        x1="220" y1="270"
                        x2="165" y2="340"
                        stroke="url(#chromeGrad)"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />

                      {/* Stick arm */}
                      <line x1="195" y1="255" x2="135" y2="395" stroke="#a07818" strokeWidth="18" strokeLinecap="round" />
                      <line x1="195" y1="255" x2="135" y2="395" stroke="url(#boomGrad)" strokeWidth="14" strokeLinecap="round" />
                      <line x1="194" y1="253" x2="134" y2="393" stroke="rgba(255,255,255,0.08)" strokeWidth="4" strokeLinecap="round" />
                      {/* Stick pin */}
                      <circle cx="195" cy="255" r="8" fill="#888" stroke="#666" strokeWidth="2" />
                      <circle cx="195" cy="255" r="3" fill="#555" />

                      {/* === BUCKET === */}
                      <motion.g
                        animate={{ rotate: [0, -20, -5, -18, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformOrigin: "135px 395px" }}
                      >
                        {/* Bucket shape — 3D */}
                        <path
                          d="M135 395 L95 412 L82 440 L115 452 L165 440 L155 412 Z"
                          fill="url(#boomGrad)"
                          stroke="#8a6810"
                          strokeWidth="2"
                        />
                        {/* Bucket interior shade */}
                        <path
                          d="M100 415 L88 438 L115 448 L158 438 L148 415 Z"
                          fill="rgba(0,0,0,0.2)"
                        />
                        {/* Teeth — 3D pointed */}
                        {[0, 1, 2, 3, 4].map((i) => (
                          <g key={`t-${i}`}>
                            <polygon
                              points={`${88 + i * 16},448 ${92 + i * 16},466 ${100 + i * 16},466 ${104 + i * 16},448`}
                              fill="url(#chromeGrad)"
                              stroke="#555"
                              strokeWidth="1"
                            />
                            {/* Tooth highlight */}
                            <line
                              x1={93 + i * 16} y1={450}
                              x2={95 + i * 16} y2={463}
                              stroke="rgba(255,255,255,0.15)"
                              strokeWidth="1.5"
                            />
                          </g>
                        ))}
                        {/* Bucket pin */}
                        <circle cx="135" cy="395" r="7" fill="#888" stroke="#666" strokeWidth="2" />

                        {/* Dirt falling from bucket */}
                        {Array.from({ length: 8 }).map((_, i) => (
                          <motion.circle
                            key={`d-${i}`}
                            cx={88 + i * 11}
                            cy="466"
                            r={1.5 + Math.random() * 2.5}
                            fill="url(#dirtGrad)"
                            animate={{
                              cy: [466, 466 + 25 + Math.random() * 35],
                              opacity: [0.9, 0],
                              x: [-3 + Math.random() * 6, -8 + Math.random() * 16],
                            }}
                            transition={{
                              duration: 0.8 + Math.random() * 0.6,
                              repeat: Infinity,
                              delay: 2.5 + i * 0.2,
                              repeatDelay: 4,
                            }}
                          />
                        ))}
                      </motion.g>
                    </motion.g>
                  </motion.g>
                </motion.g>

                {/* Dust trail behind tracks */}
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.ellipse
                    key={`dc-${i}`}
                    cx={570 + i * 25}
                    cy="442"
                    rx={18 + i * 10}
                    ry={6 + i * 3}
                    fill={`rgba(80,50,15,${0.12 - i * 0.015})`}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.12 - i * 0.015, 0],
                      x: [0, 20 + i * 8],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: 2.5 + i * 0.3,
                    }}
                  />
                ))}

                {/* "CGH" watermark in scene */}
                <motion.text
                  x="720" y="500"
                  fill="rgba(200,16,46,0.08)"
                  fontFamily="var(--font-display)"
                  fontSize="70"
                  fontWeight="900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 1.5 }}
                >
                  CGH
                </motion.text>
              </motion.svg>
            )}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cgh-charcoal to-transparent z-10" />
    </section>
  );
}

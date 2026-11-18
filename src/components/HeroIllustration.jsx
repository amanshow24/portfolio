export default function HeroIllustration() {
  return (
    <svg
      className="hero-illustration"
      viewBox="0 0 680 500"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="editor" x1="140" y1="70" x2="530" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2f302b" />
          <stop offset="1" stopColor="#22241f" />
        </linearGradient>
        <linearGradient id="accent" x1="210" y1="110" x2="545" y2="370" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a6b39a" />
          <stop offset="1" stopColor="#d0b988" />
        </linearGradient>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" stroke="#8b8b7e" strokeOpacity=".16" />
        </pattern>
        <filter id="glow" x="160" y="52" width="476" height="388" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>
      <rect x="18" y="12" width="644" height="470" rx="26" fill="url(#grid)" opacity=".8" />
      <ellipse className="illustration-glow" cx="400" cy="244" rx="196" ry="157" fill="#82765d" fillOpacity=".12" filter="url(#glow)" />
      <path d="M94 332h490" stroke="#898a7e" strokeOpacity=".35" strokeDasharray="4 9" />
      <rect x="123" y="67" width="435" height="298" rx="18" fill="url(#editor)" stroke="#8b8b7e" strokeOpacity=".55" />
      <path d="M123 101h435" stroke="#8b8b7e" strokeOpacity=".35" />
      <circle cx="148" cy="84" r="5" fill="#c98b7a" />
      <circle cx="166" cy="84" r="5" fill="#d9bc82" />
      <circle cx="184" cy="84" r="5" fill="#a6b39a" />
      <rect x="149" y="126" width="88" height="7" rx="3.5" fill="#a6b39a" />
      <rect x="149" y="151" width="45" height="7" rx="3.5" fill="#b9a98a" />
      <rect x="204" y="151" width="110" height="7" rx="3.5" fill="#c98b7a" />
      <rect x="149" y="176" width="123" height="7" rx="3.5" fill="#d9bc82" />
      <rect x="281" y="176" width="58" height="7" rx="3.5" fill="#a6b39a" />
      <rect x="149" y="201" width="68" height="7" rx="3.5" fill="#c98b7a" />
      <rect x="226" y="201" width="129" height="7" rx="3.5" fill="#b9a98a" />
      <rect x="149" y="226" width="151" height="7" rx="3.5" fill="#a6b39a" />
      <rect x="149" y="251" width="43" height="7" rx="3.5" fill="#b9a98a" />
      <rect x="201" y="251" width="104" height="7" rx="3.5" fill="#d9bc82" />
      <rect x="149" y="276" width="94" height="7" rx="3.5" fill="#c98b7a" />
      <rect x="252" y="276" width="57" height="7" rx="3.5" fill="#a6b39a" />
      <rect x="149" y="301" width="126" height="7" rx="3.5" fill="#b9a98a" />
      <rect x="379" y="126" width="145" height="92" rx="9" fill="#252620" stroke="#8b8b7e" strokeOpacity=".4" />
      <rect x="398" y="146" width="50" height="50" rx="7" fill="#3d3e34" />
      <path d="m414 171 10-10 10 10-10 10-10-10Z" fill="url(#accent)" />
      <rect x="461" y="148" width="42" height="6" rx="3" fill="#e8e1d2" fillOpacity=".85" />
      <rect x="461" y="164" width="31" height="5" rx="2.5" fill="#8b8b7e" />
      <rect x="461" y="179" width="50" height="5" rx="2.5" fill="#8b8b7e" />
      <rect x="379" y="237" width="145" height="89" rx="9" fill="#252620" stroke="#8b8b7e" strokeOpacity=".4" />
      <rect x="398" y="256" width="104" height="6" rx="3" fill="#e8e1d2" fillOpacity=".85" />
      <rect x="398" y="273" width="78" height="5" rx="2.5" fill="#8b8b7e" />
      <rect x="398" y="289" width="91" height="5" rx="2.5" fill="#8b8b7e" />
      <path d="M235 385h219l34 25H201l34-25Z" fill="#2f302b" stroke="#8b8b7e" strokeOpacity=".55" />
      <path d="M262 393h164l12 9H250l12-9Z" fill="#252620" />
      <g className="illustration-float">
        <rect x="73" y="256" width="52" height="52" rx="13" fill="#a6b39a" fillOpacity=".13" stroke="#a6b39a" strokeOpacity=".55" />
        <path d="m88 271 8 8-8 8m16-16-8 16" stroke="#a6b39a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="illustration-float illustration-float-delayed">
        <rect x="534" y="337" width="54" height="54" rx="14" fill="#b9a98a" fillOpacity=".16" stroke="#b9a98a" strokeOpacity=".65" />
        <path d="m550 364 10-12 10 12m-10-12v25" stroke="#d9cbae" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle className="illustration-dot illustration-dot-first" cx="112" cy="154" r="8" fill="#a6b39a" />
      <circle className="illustration-dot illustration-dot-second" cx="574" cy="138" r="5" fill="#d9bc82" />
      <circle className="illustration-dot illustration-dot-third" cx="126" cy="389" r="5" fill="#c98b7a" />
    </svg>
  );
}

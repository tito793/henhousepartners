module.exports = {
           theme: {
               extend: {
                   colors: {
                       navy: {
                           950: '#070B14',
                           900: '#0B132B',
                           800: '#1C2541',
                           700: '#2A385B',
                       },
                       bronze: {
                           300: '#BAE2FA',
                           400: '#78C4F2',
                           500: '#59ACEA',
                           600: '#2F87C7',
                       },
                       slateCustom: '#64748B',
                   },
                   fontFamily: {
                       sans: ['Plus Jakarta Sans', 'sans-serif'],
                       serif: ['Playfair Display', 'serif'],
                   }
               }
           }
       };
module.exports.content = ["./src/**/*.html"];
module.exports.safelist = ["bg-brand-600", "text-white", "shadow-sm", "text-slate-600", "bg-bronze-500", "bg-navy-800", "text-navy-950"];

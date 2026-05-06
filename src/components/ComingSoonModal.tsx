import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { X, Smartphone, Bell } from 'lucide-react'
import LogoIcon from './LogoIcon'

type ModalContextType = { openModal: () => void }

const ModalContext = createContext<ModalContextType>({ openModal: () => {} })

// eslint-disable-next-line react-refresh/only-export-components
export function useAppModal() {
  return useContext(ModalContext)
}

export function AppModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <ModalContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Indigo header */}
            <div className="bg-indigo-600 px-8 pt-10 pb-8 flex flex-col items-center text-center">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-indigo-200 hover:text-white hover:bg-indigo-500 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <LogoIcon size={60} />

              <h2 className="mt-5 text-2xl font-extrabold text-white tracking-tight">
                MoVaultX
              </h2>
              <p className="mt-1 text-indigo-200 text-sm font-medium">
                Your trusted savings vault
              </p>
            </div>

            {/* Body */}
            <div className="px-8 py-6 text-center">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                Coming Soon
              </span>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                We're putting the finishing touches on MoVaultX before submitting to
                the Google Play Store and App Store. It will be available to download
                very soon.
              </p>

              <div className="flex flex-col gap-2.5 mb-6 text-left">
                <div className="flex items-center gap-3 bg-indigo-50 rounded-xl px-4 py-3">
                  <Smartphone size={17} className="text-indigo-500 shrink-0" />
                  <p className="text-sm text-gray-700">
                    Launching on <span className="font-semibold text-gray-900">Android & iOS</span>
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-indigo-50 rounded-xl px-4 py-3">
                  <Bell size={17} className="text-indigo-500 shrink-0" />
                  <p className="text-sm text-gray-700">
                    Check back here or follow us for the launch date.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 active:bg-indigo-800 transition-colors"
              >
                Got it — I'll check back soon
              </button>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  )
}

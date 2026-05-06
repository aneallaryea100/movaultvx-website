import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { X, Vault, Smartphone, Bell } from 'lucide-react'

type ModalContextType = { openModal: () => void }

const ModalContext = createContext<ModalContextType>({ openModal: () => {} })

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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 text-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 mx-auto mb-5">
              <Vault size={32} className="text-indigo-600" strokeWidth={1.8} />
            </div>

            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-100 text-amber-700">
              Coming Soon
            </span>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              MoVaultX is on its way
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We're putting the finishing touches on MoVaultX before submitting to
              the Google Play Store and App Store. It will be available to download
              very soon.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 text-left">
                <Smartphone size={18} className="text-indigo-500 shrink-0" />
                <p className="text-sm text-gray-600">
                  Available on <span className="font-semibold text-gray-800">Android & iOS</span>
                </p>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 text-left">
                <Bell size={18} className="text-indigo-500 shrink-0" />
                <p className="text-sm text-gray-600">
                  Stay updated — follow us or check back here for the launch date.
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors"
            >
              Got it, I'll check back soon
            </button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  )
}

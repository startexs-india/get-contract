'use client';
import { motion, AnimatePresence } from "framer-motion";
import LoginModel from "./LoginModel";
import SignupModel from "./SignUpModel";
import { useState } from "react";


export default function AuthModel({ isOpen, onClose, type, setType }) {

    const [loginModel, setLoginModel] = useState(true);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Sliding Panel */}
                    <motion.div
                        className="bg-white w-full md:w-[70%] lg:w-1/2 h-full p-6 shadow-xl overflow-y-auto 
                            flex items-center justify-center"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 70 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full">
                            {loginModel ?
                                <div>
                                    <LoginModel setLoginModel={setLoginModel} />
                                </div>
                                :
                                <div>
                                    <SignupModel setLoginModel={setLoginModel} />
                                </div>
                            }
                        </div>


                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

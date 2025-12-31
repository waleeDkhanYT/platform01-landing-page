import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone } from "lucide-react";

const TeamMemberModal = ({ isOpen, onClose, member }) => {
    if (!member) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/60 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Wrapper */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        {/* Modal Container */}
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white w-full h-[100dvh] md:h-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl md:max-h-[85vh] md:rounded-lg flex flex-col"
                        >
                            {/* Header (Sticky) */}
                            <div className="flex justify-between items-center px-4 py-3 border-b shrink-0">
                                <h3 className="text-base md:text-xl font-bold">
                                    Team Member – {member.name}
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-black"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto">
                                <div className="grid md:grid-cols-3 gap-6 p-4 md:p-8">

                                    {/* Image */}
                                    <div className="bg-gray-100 rounded-lg flex items-center justify-center">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="h-60 md:h-[420px] w-full object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="md:col-span-2 flex flex-col">
                                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                                            {member.name}
                                        </h2>

                                        <p className="text-sm text-gray-500 mb-4">
                                            {member.role} — {member.description}
                                        </p>

                                        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                                            <p>
                                                <strong className="text-black">Background:</strong><br />
                                                {member.background}
                                            </p>

                                            <p>
                                                <strong className="text-black">Sectors of Expertise:</strong><br />
                                                {member.sectors}
                                            </p>

                                            <p>
                                                <strong className="text-black">Prior Experience:</strong><br />
                                                {member.priorExperience || member.experience}
                                            </p>

                                            <p>
                                                <strong className="text-black">Education:</strong><br />
                                                {member.education}
                                            </p>

                                            <p>
                                                <strong className="text-black">Professional Qualifications:</strong><br />
                                                {member.qualifications}
                                            </p>
                                        </div>

                                        {/* CTA */}
                                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                            {member.email && (
                                                <a href={`mailto:${member.email}`} className="flex items-center gap-2 border px-4 py-2 rounded-md">
                                                    <Mail size={16} /> Email
                                                </a>
                                            )}

                                            {member.phone && (
                                                <a href={`tel:${member.phone}`} className="flex items-center gap-2 border px-4 py-2 rounded-md">
                                                    <Phone size={16} /> Call
                                                </a>
                                            )}

                                            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
                                                Talk to an expert →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default TeamMemberModal;
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";


// TypeScript interface for props
interface MobileMenuProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
    navItems: { name: string; href: string }[];
    services: { title: string; description: string; icon: string; href: string }[];
}


const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen, navItems, services }: MobileMenuProps) => {



    // Using useLocation to get the current path 
    const location = useLocation();



    return (

        <div
            className={cn(
                "fixed inset-x-0 top-16 z-40 md:hidden bg-white backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden",
                isMobileMenuOpen
                    ? "h-[calc(100vh-4rem)] opacity-100 overflow-y-auto"
                    : "h-0 opacity-0"
            )}
        >


            <div className="w-full px-0 pt-4 pb-6 space-y-3">


                {/* Nav Items */}
                <div className="space-y-1 px-4">

                    {navItems.map((item, index) => (

                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                                "block w-full px-4 py-3 rounded-lg text-base font-medium bg-background transition-all duration-300 ease-in-out transform",
                                "hover:bg-accent hover:text-accent-foreground hover:translate-x-1",
                                "animate-in slide-in-from-left fade-in",
                                location.pathname === item.href
                                    ? "text-primary bg-gray-100 font-bold"
                                    : "text-foreground"
                            )}
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>

                    ))}

                </div>


                {/* Services */}
                <div className="pt-4 px-4 border-t border-border/50">

                    <div className="px-1 pb-2 text-md font-semibold text-muted-foreground uppercase tracking-wide">
                        Services
                    </div>

                    <div className="space-y-2">

                        {services.map((service, index) => (

                            <Link
                                key={service.title}
                                to={service.href}
                                className={cn(
                                    "flex items-start px-4 py-3 rounded-lg text-base font-medium bg-background transition-all duration-300 ease-in-out transform",
                                    "hover:bg-accent hover:text-accent-foreground hover:translate-x-1",
                                    "animate-in slide-in-from-left fade-in",
                                    location.pathname === service.href
                                        ? "text-primary bg-muted font-bold"
                                        : "text-foreground"
                                )}
                                style={{ animationDelay: `${(navItems.length + index) * 100}ms` }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >

                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-10 h-10 object-contain mr-3 mt-1"
                                    loading="lazy"
                                />

                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">{service.title}</span>
                                    <span className="text-xs text-muted-foreground">{service.description}</span>
                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default MobileMenu;

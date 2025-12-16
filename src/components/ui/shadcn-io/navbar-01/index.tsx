import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   Logo                                     */
/* -------------------------------------------------------------------------- */

const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 324 323"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="88.1023"
        y="144.792"
        width="151.802"
        height="36.5788"
        rx="18.2894"
        transform="rotate(-38.5799 88.1023 144.792)"
      />
      <rect
        x="85.3459"
        y="244.537"
        width="151.802"
        height="36.5788"
        rx="18.2894"
        transform="rotate(-38.5799 85.3459 244.537)"
      />
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/*                               Hamburger Icon                               */
/* -------------------------------------------------------------------------- */

const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 12H20" />
    <path d="M4 6H20" />
    <path d="M4 18H20" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface Navbar01NavLink {
  href: string;
  label: string;
}

export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar01NavLink[];
  signInText?: string;
  onSignInClick?: () => void;
}

/* -------------------------------------------------------------------------- */
/*                                 Navbar                                     */
/* -------------------------------------------------------------------------- */

export const Navbar01 = React.forwardRef<HTMLElement, Navbar01Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "/",
      navigationLinks = [],
      signInText = "Sign In",
      onSignInClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          setIsMobile(containerRef.current.offsetWidth < 768);
        }
      };

      checkWidth();
      const observer = new ResizeObserver(checkWidth);
      if (containerRef.current) observer.observe(containerRef.current);

      return () => observer.disconnect();
    }, []);

    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );

    const NavItem = ({ href, label }: Navbar01NavLink) => (
      <NavLink to={href}>
        {({ isActive }) => (
          <span
            className={cn(
              "block rounded-md px-4 py-2 text-sm transition-colors hover:bg-accent",
              isActive && "bg-accent font-medium"
            )}
          >
            {label}
          </span>
        )}
      </NavLink>
    );

    return (
      <header
        ref={combinedRef}
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6",
          className
        )}
        {...props}
      >
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>

                <PopoverContent align="start" className="w-48 p-2">
                  <NavigationMenu>
                    <NavigationMenuList className="flex-col gap-1">
                      {navigationLinks.map((link) => (
                        <NavigationMenuItem key={link.label}>
                          <NavItem {...link} />
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}

            <NavLink
              to={logoHref}
              className="flex items-center gap-2 font-bold text-xl"
            >
              <span className="text-2xl">{logo}</span>
              <span className="hidden sm:inline-block">Enerqube</span>
            </NavLink>

            {!isMobile && (
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.label}>
                      <NavItem {...link} />
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onSignInClick}>
              {signInText}
            </Button>
            <div className="rounded-md border p-1">
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
    );
  }
);

Navbar01.displayName = "Navbar01";

export { Logo, HamburgerIcon };

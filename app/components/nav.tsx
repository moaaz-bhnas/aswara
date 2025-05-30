import { ThemeSwitch } from "./theme-switch";

export function Navbar() {
  return (
    <nav className="flex items-center justify-end w-full">
      <ThemeSwitch />
    </nav>
  );
}

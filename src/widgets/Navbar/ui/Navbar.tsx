import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}></div>
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>
        Main Page
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
        About
      </AppLink>
    </div>
  );
};
import { Link } from "@remix-run/react";
import cn from "classnames";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}

const Button = ({ children, href, className, ...props }: ButtonProps) => {
	if (!href) {
		return (
			<a className={cn("button", className)} href={href} {...props}>
				{children}
			</a>
		);
	}
	return (
		<Link className={cn("button", className)} to={href} {...props}>
			{children}
		</Link>
	);
};

export default Button;

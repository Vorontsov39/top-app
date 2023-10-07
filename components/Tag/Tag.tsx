import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';


export const Tag = ({ size = 'm', children, href, color = 'ghost', className, ...props }: TagProps) => {
	console.log(styles);

	return (
		<div className={cn(styles.tag, className, styles[size], styles[color])}
			{...props}
		>
			{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>}
		</div>
	);
};
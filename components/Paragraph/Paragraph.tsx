import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';


export const Paragraph = ({ size = 'm', children, className, ...props }: ParagraphProps) => {
	return (
		<p className={cn(styles.p, className, styles[size])}
			{...props}
		>
			{children}
		</p>
	);
};
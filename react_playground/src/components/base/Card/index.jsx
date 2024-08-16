import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

// 定义课程信息数组
const courses = [
  {
    title: '网络请求',
    date: '04.11.2022',
  },
  // 添加更多课程...
];

const Card = () => {
  return (
    <div className={cn('ag_format_container')}>
      <div className={cn('ag_courses_box')}>
        {courses.map((course, index) => (
          <div key={index} className={cn('ag_courses_item')}>
            <a href="/" className={cn('ag_courses_item_link')}>
              <div className={cn('ag_courses_item_bg')}></div>
              <div className={cn('ag_courses_item_title')}>{course.title}</div>
              <div className={cn('ag_courses_item_date_box')}>
                <span className={cn('ag_courses_item_date')}>
                  {course.date}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

Card.type = 'component';

export default Card;

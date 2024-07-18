import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

// 定义课程信息数组
const courses = [
  {
    title: '网络请求',
    date: '04.11.2022',
  },
  {
    title: '状态管理',
    date: '04.11.2022',
  },
  {
    title: '第三方组件库',
    date: '04.11.2022',
  },
  // 添加更多课程...
];

const Card = () => {
  return (
    <div className={cn('ag-format-container')}>
      <div className={cn('ag-courses_box')}>
        {courses.map((course, index) => (
          <div key={index} className={cn('ag-courses_item')}>
            <a href="/" className={cn('ag-courses-item_link')}>
              <div className={cn('ag-courses-item_bg')}></div>
              <div className={cn('ag-courses-item_title')}>{course.title}</div>
              <div className={cn('ag-courses-item_date-box')}>
                <span className={cn('ag-courses-item_date')}>
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

export default Card;

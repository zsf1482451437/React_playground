import { useEffect, useState } from 'react';
import { Table } from 'antd';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);
// 表格列配置
const columns = [
  {
    title: '项目',
    dataIndex: 'category',
    key: 'category',
    render: (category) => <span>{category}</span>,
  },
  {
    title: '运动员风采',
    dataIndex: 'img',
    key: 'img',
    render: (img) => (
      <img src={img} className={cn('img')} alt="运动员风采"></img>
    ),
  },
  {
    title: '运动员姓名',
    dataIndex: 'sporterName',
    key: 'sporterName',
    render: (sporterName) => (
      <span className={cn('sporterName')}>{sporterName}</span>
    ),
  },
  {
    title: '金牌时刻',
    dataIndex: 'time',
    key: 'time',
    render: (time) => <span className={cn('time')}>{time}</span>,
  },
  {
    title: '回放',
    dataIndex: 'url',
    key: 'url',
    render: (url) => (
      <a href={url} target="_blank" rel="noopener noreferrer">
        查看
      </a>
    ),
  },
];

const Olympic = () => {
  const [goldSportList, setGoldSportList] = useState([]);

  useEffect(() => {
    // 中国奖牌
    fetch(
      '/api/List/getHandDataList?id=TDAT1719213513235359&serviceId=tvcctv&n=100&p=1'
    )
      .then((response) => response.json())
      .then((json) => {
        const { itemList } = json?.data;
        const goldList = itemList
          .filter((item) => item.mark === 'jin')
          .map(({ brief, image, operate_time, title, url }) => ({
            id: url,
            // 项目
            category: brief,
            // 运动员图片
            img: image,
            // 运动员姓名
            sporterName: title,
            // 时间
            time: operate_time,
            // 回放链接
            url: url,
          }));
        setGoldSportList(goldList);
      })
      .catch((error) => {
        console.error('请求失败', error);
      });
  }, []);

  return (
    <div>
      <h2>巴黎奥运-中国-金牌项目</h2>
      <Table
        className={cn('table')}
        dataSource={goldSportList}
        columns={columns}
        pagination={{
          total: goldSportList.length,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total) => `总数 ${total}`,
        }}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

Olympic.type = 'page';

export default Olympic;

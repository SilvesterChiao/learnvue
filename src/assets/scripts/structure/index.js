import { List } from './List'
import { Stack } from './Stack'
import { Queue } from './Queue'
import { LList } from './LinkedList'
// 数据结构

// 基本类型
// 1 集合
// 2 线性
// 3 树
// 4 图

// 1 数组
// 2 列表
function testList () {
    let l = new List()
    l.append('西红柿')
    console.log(l.toString())
}

// 3 栈
function testStack () {
    let s = new Stack()
    let stars = [
        '金星',
        '水星',
        '地球',
        '火星',
        '木星',
        '土星',
        '天王星',
        '海王星',
        '冥王星'
    ]
    stars.forEach(star => {
        s.push(star)
    })

    console.log(s)
}

// 4 队列
function testQueue () {
    let q = new Queue()
    q.enqueue('流刃若火')
    q.enqueue('雀峰')
    q.enqueue('神枪')
    q.enqueue('肉雫唼')
    q.enqueue('镜花水月')
    q.enqueue('千本樱')
    q.enqueue('天谴')
    q.enqueue('花天狂骨')
    q.enqueue('清虫')
    q.enqueue('野晒')
    q.enqueue('冰轮丸')
    q.enqueue('疋杀地藏')
    q.enqueue('双鱼鲤')
    console.log(q.toString())
}

// 5 链表
function testLinkedList () {
    let ll = new LList()
    ll.insert('卡卡西')
    ll.insert('迈特凯')
    ll.insert('夕日红')
    ll.insert('猿飞阿斯玛')
    ll.insert('御手洗红豆')
    ll.insert('漩涡鸣人')
    ll.insert('宇智波佐助')
    ll.insert('天天')
    ll.insert('日向雏田')
    ll.insert('黑土')
    ll.display()
}

// 6 字典
// 7 散列
// 8 集合
// 9 二叉树
// 10 图
// 11 排序
// 12 检索
// 13 高级算法

export { testList, testStack, testQueue, testLinkedList }

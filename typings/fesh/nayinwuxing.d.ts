declare module '@siloqian/fesh-typings' {
  /**
   * 纳音五行
   *
   * @public
   */
  export type NaYinWuXing =
    | 'hizj' // 海中金
    | 'luzh' // 炉中火
    | 'dalm' // 大林木
    | 'lupt' // 路旁土
    | 'jifj' // 剑峰金
    | 'shth' // 山头火
    | 'jixs' // 涧下水
    | 'chtt' // 城头土
    | 'bilj' // 白腊金
    | 'yalm' // 杨柳木
    | 'jnqs' // 井泉水
    | 'wust' // 屋上土
    | 'pilh' // 霹雳火
    | 'sobm' // 松柏木
    | 'cals' // 长流水
    | 'sasj' // 沙中金
    | 'saxh' // 山下火
    | 'pidm' // 平地木
    | 'bist' // 壁上土
    | 'jibj' // 金箔金
    | 'fudh' // 佛灯火
    | 'tihs' // 天河水
    | 'dayt' // 大驿土
    | 'cacj' // 钗钏金
    | 'satm' // 桑柘木
    | 'daxs' // 大溪水
    | 'sazt' // 沙中土
    | 'tish' // 天上火
    | 'shlm' // 石榴木
    | 'dahs'; // 大海水

  /**
   * 纳音生肖
   *
   * @public
   */
  export type JiaZi60ShengXiao =
    | 'wusMs' // 屋上之鼠
    | 'hinOx' // 海内之牛
    | 'musTg' // 山木之虎
    | 'wayRb' // 望月之兔
    | 'qiwDr' // 清温之龙
    | 'fuqSn' // 福气之蛇
    | 'tagHs' // 堂裹之马
    | 'delSp' // 得禄之羊
    | 'qitMk' // 清透之猴
    | 'losCk' // 楼宿之鸡
    | 'sosDg' // 守身之狗
    | 'gowPg' // 过往之猪
    | 'tinMs' // 田内之鼠
    | 'hunOx' // 湖内之牛
    | 'gosTg' // 过山之虎
    | 'chlRb' // 出林之兔
    | 'nuxDr' // 恕性之龙
    | 'docSn' // 冬藏之蛇
    | 'juzHs' // 军中之马
    | 'qunSp' // 群内之羊
    | 'gosMk' // 过树之猴
    | 'cawCk' // 唱午之鸡
    | 'zimDg' // 自眠之狗
    | 'gosPg' // 过山之猪
    | 'canMs' // 仓内之鼠
    | 'lanOx' // 栏内之牛
    | 'chsTg' // 出山之虎
    | 'chkRb' // 蟾窟之兔
    | 'xiyDr' // 行雨之龙
    | 'cazSn' // 草中之蛇
    | 'yuzHs' // 云中之马
    | 'jizSp' // 敬重之羊
    | 'sasMk' // 山上之猴
    | 'dulCk' // 独立之鸡
    | 'jisDg' // 进山之狗
    | 'dayPg' // 道院之猪
    | 'lasMs' // 梁上之鼠
    | 'lutOx' // 路途之牛
    | 'golTg' // 过林之虎
    | 'salRb' // 山林之兔
    | 'futDr' // 伏潭之龙
    | 'chxSn' // 出穴之蛇
    | 'xilHs' // 行路之马
    | 'shqSp' // 失群之羊
    | 'dulMk' // 独立之猴
    | 'baxCk' // 报晓之鸡
    | 'sigDg' // 寺观之狗
    | 'julPg' // 圈里之猪
    | 'shsMs' // 山上之鼠
    | 'junOx' // 圈内之牛
    | 'lidTg' // 立定之虎
    | 'dedRb' // 得道之兔
    | 'tisDr' // 天上之龙
    | 'tanSn' // 塘内之蛇
    | 'lanHs' // 廊内之马
    | 'caySp' // 草野之羊
    | 'shgMk' // 食果之猴
    | 'lonCk' // 笼内之鸡
    | 'gujDg' // 顾家之狗
    | 'lixPg'; // 林下之猪

  /**
   * 六十甲子纳音五行表行类型
   *
   * @public
   */
  export interface JiaZi60WuXingShengXiaoPack {
    jiaZi: JiaZi60;
    wuXing: WuXing;
    naYinWuXing: NaYinWuXing;
    shengXiao: JiaZi60ShengXiao;
    order: number;
  }
}

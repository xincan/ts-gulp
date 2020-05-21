export class StringUtils {

    /**
     *  验证字符串是否为空
     * @param record 将要判断的字符串
     * @author JiangXincan
     * @date 2020/5/19 13:03
     * @return boolean
     */
    public static empty(record: string): boolean {
        return record === null || record === "" || record.length === 0;
    }

}

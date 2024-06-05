export default function () {
    const activeKey = useState<string>('activeKey', () => '');

    function setActive(key: string) {
        if (activeKey.value === key) {
            activeKey.value = ''
            return;
        }
        activeKey.value = key

    }


    return { setActive, activeKey }
}
export default class SingletonClass {
    protected constructor() { }
    private static _ins: SingletonClass;
    public static ins() {
        if (!this._ins) {
            this._ins = new this;
        }
        return this._ins;
    }
}

//Email puhalskijsemen@gmail.com
//Open VPN global mode on the source code website http://web3incubators.com/
//Telegram https://t.me/gamecode999
//Web Customer Service http://web3incubators.com/kefu.html
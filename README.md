# node-tap
基于NodeJS实现的Tun2Shadowsocks.
目前可用于Windows平台.

# 测试实现特性
* 缩水TCP实现(⚠️)
* UDP转发(⚠️)
* UDP转发多倍发包(✅)
* 内建DNS解析转发(❌)

# 使用
目前仅支持`rc4-md5`
```
.\node_modules\.bin\ts-node.cmd test\test.ts --host [ss host] --port [ss port] --password [ss password] --xtudp [x times]
```

* `host`: Shadowsocks地址
* `port`: Shadowsocks端口
* `password`: Shadowsocks密码
* `xtudp`: UDP 多倍发包倍率(适用于游戏)

# 参考
* [net-speeder](https://github.com/snooda/net-speeder)
* [uIP](https://en.wikipedia.org/wiki/UIP_(micro_IP))
* [badvpn](https://github.com/ambrop72/badvpn)
* [gotun2socks](https://github.com/yinghuocho/gotun2socks)
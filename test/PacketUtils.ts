
import {
    BasePacket,
    ArpPacket,
    IpPacket,
    TcpPacket,
    UdpPacket
} from "./PacketsStruct"

export default {

    isBroadCast: function (bufs): boolean {
        for (var i = 0; i < 6; i++) {
            if (bufs[i] != 0xff) {
                return false;
            }
        }
        return true;
    },

    isARP: function (bufs): boolean {
        return bufs[12] == 0x08 && bufs[13] == 0x06
    },

    isIPv4: function (bufs): boolean {
        return bufs[12] === 0x08 && bufs[13] === 0x00;
    },

    isTCP: function (bufs): boolean {
        return bufs[23] === 0x06;
    },

    isUDP: function (bufs): boolean {
        return bufs[23] === 0x11;
    },

    isIGMP: function (bufs): boolean {
        return bufs[23] === 0x02;
    },

    stringToIpAddress: function (ip): Buffer {
        var nip = ip.split(".").map(function (item) {
            return parseInt(item);
        })
        return Buffer.from(nip);
    },

    ipAddressToString: function (bufs) {
        return `${bufs[0].toString(10)}.${bufs[1].toString(10)}.${bufs[2].toString(10)}.${bufs[3].toString(10)}`;
    },

    increaseNumber: function (value: number, maximumValue: number): number {
        value++;
        if (value == maximumValue) {
            value = 0;
        }
        return value;
    },

    getConnectionId: function(packet: TcpPacket | UdpPacket): string {
        var sourceIp: string = this.ipAddressToString(packet.sourceIp);
        var destinationIp: string = this.ipAddressToString(packet.destinationIp);
        return `${sourceIp}:${packet.sourcePort}-${destinationIp}:${packet.destinationPort}`;
    }
}
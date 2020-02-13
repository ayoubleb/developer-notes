(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{nU76:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/AWS/Advanced-Networking.md"}});var l={_frontmatter:o},b=i.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(b,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"advanced-networking"},"Advanced Networking"),Object(n.b)("h2",{id:"ipv4-and-subnetting"},"IPv4 and Subnetting"),Object(n.b)("p",null,"255.255.255.255"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"/8, /16, /24, /32")," refers to how many bits are being masked. If it is ",Object(n.b)("inlineCode",{parentName:"p"},"/17")," for example, 17 bits are masked with ",Object(n.b)("inlineCode",{parentName:"p"},"2^1")," subnets and ",Object(n.b)("inlineCode",{parentName:"p"},"2^15 - 2")," available addresses with one address for the host and one for the network."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"MPLS (Multi-Protocol Label Switching)"),"\nMethod by which a direct link between two or more sites is simulated by efficiently directing traffic over multiple points."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Addresses in 10.0.0.0/16 VPC reserved for AWS"),"\n10.0.0.0, 10.0.0.1, 10.0.0.2, 10.0.0.3 and 10.0.0.255."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"FEC (Forward Equivalency Class)"),"\nA label applied to packets to allow routes to immediately know where to route them."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"BGP"),"\nAWS preferred Routing Protocol to route between multiple Autonomous Systems."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Encryption Keys that require both public and private"),"\nPublic-Key encryption (or asymmetric key encryption)."),Object(n.b)("h2",{id:"vpn-fundamentals"},"VPN Fundamentals"),Object(n.b)("p",null,"What is a VPN?"),Object(n.b)("p",null,"Virtual Private Network that exists to allow traffic to move securely and confidentially."),Object(n.b)("p",null,"There are two primary types:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Site-to-site: Two or more sites are connected without any software on the client machines. MPLS can be used to create this."),Object(n.b)("li",{parentName:"ol"},"Client-to-site: Client has software installed that allows it to communicate with the site. Typically used for remote workers.")),Object(n.b)("h3",{id:"keys"},"Keys"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Symmetric-key encryption: All parties share the same key to encrypt and decrypt a message."),Object(n.b)("li",{parentName:"ol"},"Public-key encrytion (asymmetric): Each party has a public-private key pair. One computer uses its private key to encrypt a message and the other uses its public key to decrypt.")),Object(n.b)("h3",{id:"auth-key-exchange"},"Auth Key Exchange"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"RSA:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Asymmetric."),Object(n.b)("li",{parentName:"ul"},"Used primarily in key exchange in other protocols, such as SSL. RSA is used to encrypt an AES key exchange."),Object(n.b)("li",{parentName:"ul"},"2048 bit encryption or higher is considered secure as 1024 has been theorized to be cracked by NSA."))),Object(n.b)("li",{parentName:"ol"},"Diffie-Hellman",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Faster than RSA"),Object(n.b)("li",{parentName:"ul"},"Used by AWS"),Object(n.b)("li",{parentName:"ul"},"Provides PFS"))),Object(n.b)("li",{parentName:"ol"},"PFS (Perfect Forward Secrecy)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Means that the compromise of session does not endanger others. New keys are created for every session.")))),Object(n.b)("h3",{id:"message-intergrity"},"Message intergrity"),Object(n.b)("p",null,"If intercepted, the message could be modified."),Object(n.b)("p",null,"To verify authenticity you have the following options:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"MD5 (Message Digest)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"MD5 is broken, don't use for production environments."))),Object(n.b)("li",{parentName:"ol"},"SHA (Secure Hash Algorithm)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"SHA-1: 160-bit hash similar to MD5. Also considered insecure."),Object(n.b)("li",{parentName:"ul"},"SHA-2: SHA-2 includes SHA-256 and SHA-512."),Object(n.b)("li",{parentName:"ul"},"SHA-3: SHA-3 is the only member of the SHA family not created by the NSA.")))),Object(n.b)("h3",{id:"confidentiality"},"Confidentiality"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Triple DES (3DES)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Three symmetric keys with 56 bits each."),Object(n.b)("li",{parentName:"ul"},"Slowly being phased out in favour of stronger encrytion keys."))),Object(n.b)("li",{parentName:"ol"},"Blowfish",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Fast algorithm."),Object(n.b)("li",{parentName:"ul"},"Secure."),Object(n.b)("li",{parentName:"ul"},"Blocks of 64 bits encrypted individually."))),Object(n.b)("li",{parentName:"ol"},"Twofish",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Successor to Blowfish"),Object(n.b)("li",{parentName:"ul"},"Up to 256 bit in length"),Object(n.b)("li",{parentName:"ul"},"One of the faster algorithms"))),Object(n.b)("li",{parentName:"ol"},"AES",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Standard for US Gov and many other organizations."),Object(n.b)("li",{parentName:"ul"},"Symmetric key algorithm."),Object(n.b)("li",{parentName:"ul"},"Uses 128, 192 or 256 bit encryption."),Object(n.b)("li",{parentName:"ul"},"Widely regarded as the de-facto standard for message encryption."),Object(n.b)("li",{parentName:"ul"},"Probably what is used in many instances.")))),Object(n.b)("h3",{id:"vpn-protocols"},"VPN Protocols"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"PPP",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Point-to-point protocol used to encrypt traffic within a tunnel."),Object(n.b)("li",{parentName:"ul"},"PPP is Layer 2 protocol."))),Object(n.b)("li",{parentName:"ol"},"PPTP",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Point-to-point tunnel protocol."),Object(n.b)("li",{parentName:"ul"},"Establishes GRE tunnel. Then uses PPP to encrypt and authenticate the traffic."),Object(n.b)("li",{parentName:"ul"},"Uses simple password auth."))),Object(n.b)("li",{parentName:"ol"},"L2TP",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Layer 2 transfer protocol."),Object(n.b)("li",{parentName:"ul"},"Created by Microsoft and Cisco to combine LTP and PPTP to create a more secure protocol using IPSec."))),Object(n.b)("li",{parentName:"ol"},"IKEv2",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Internet Key Exchange version 2"),Object(n.b)("li",{parentName:"ul"},"Used with IPSec and was created by Microsoft and Cisco to be faster than L2TP."))),Object(n.b)("li",{parentName:"ol"},"SSL VPN",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Can be initiated through a web browser."),Object(n.b)("li",{parentName:"ul"},"An SSL VPN does not require VPN client software."))),Object(n.b)("li",{parentName:"ol"},"OpenVPN",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Uses OpenSSL library. Open source and frequenctly updated."),Object(n.b)("li",{parentName:"ul"},"Commonly considered the most secure VPN protocol."))),Object(n.b)("li",{parentName:"ol"},"IPsec",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"SA: Security association that describes the security features of an IPsec connection."),Object(n.b)("li",{parentName:"ul"},"AH: Auth header. Guarantees connectionless integrity and data origin of IP packets Auths entire packet, with the exception of mutable fields such as DSCP/ToS. Does not encrypt the payload."),Object(n.b)("li",{parentName:"ul"},"ESP: The Encapsulating Security Payload provides encryption and authentication. But only authenticates contents of the packet."),Object(n.b)("li",{parentName:"ul"},"Transport Mode: Encapsultes the payload of a packet. Used for most client to server relationships."),Object(n.b)("li",{parentName:"ul"},"Tunnel Mode: Encapsulates the entire IP packet. Used for most VPNs.")))),Object(n.b)("h3",{id:"ipsec-process"},"IPsec Process"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"IKE Phase 1",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Endpoints use ISAKMP (Internet Security Association and Key Management Protocol) to authenticate and negotiate the keys. This creates an encrypted tunnel used by Phase 2 for negotiating the ESP security associations."),Object(n.b)("li",{parentName:"ul"},"Uses an auth Diffie-Hellman exchange to match the PSKs."),Object(n.b)("li",{parentName:"ul"},"Main Mode: Most secure. Provides complete security of the key exchange."),Object(n.b)("li",{parentName:"ul"},"Aggressive Mode: Uses half the exchanges in the key exchange process, but transmits some information in cleartext."))),Object(n.b)("li",{parentName:"ol"},"IKE Phase 2",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The endpoints use the tunnel created in Phase 1 to negotiate ESP SAs. The ESP SAs encrypt the actual user data."),Object(n.b)("li",{parentName:"ul"},"After phase 2, the tunnel is created.")))),Object(n.b)("h3",{id:"ike-key-exchange"},"IKE Key Exchange"),Object(n.b)("p",null,"The nodes must agree on the following:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The encryption algorithm. AES is an example."),Object(n.b)("li",{parentName:"ol"},"The bit-strength of the encryption key. This is commonly a Diffie-Hellman group."),Object(n.b)("li",{parentName:"ol"},"The authentication method. Typically an RSA digital signature."),Object(n.b)("li",{parentName:"ol"},"The hash algorithm. Usually SHA-1 or higher."),Object(n.b)("li",{parentName:"ol"},"The auth material. This is usually a PSK.")),Object(n.b)("h2",{id:"intro-the-bgp"},"Intro the BGP"),Object(n.b)("h3",{id:"terms"},"Terms"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"AS (Autonomous System): is a network or collection of network controlled by a single entity. Such as a corporation or university. An AS has its own routing table."),Object(n.b)("li",{parentName:"ul"},"AS Number: Provided by IANA to identify individual ASes."),Object(n.b)("li",{parentName:"ul"},"BGP (Border Gateway Protocol): A routing protocol used to route between multiple Autonomous Systems."),Object(n.b)("li",{parentName:"ul"},"EGP (Exterior Gateway Protocol): BGP is an example of an EGP. EGPs are used to route between organization/networks or Autonomous Systems."),Object(n.b)("li",{parentName:"ul"},"IGP (Interior Gateway Protocol): A routing protocol used within an Autonomous System. RIP, EIGRP, IS-IS and OSPF are examples."),Object(n.b)("li",{parentName:"ul"},"Multihoming: Having two separate ISPs for a network. Typically used for failover, redundacy or bandwidth.")),Object(n.b)("h3",{id:"about"},"About"),Object(n.b)("p",null,"How the ",Object(n.b)("inlineCode",{parentName:"p"},"entire")," internet communicates. We'e all used it. BGP is the only protocol that operates outside of an AS."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"eBGP is for external communication between ASes."),Object(n.b)("li",{parentName:"ul"},"iBGP allows communication from within an AS."),Object(n.b)("li",{parentName:"ul"},"Most internal routing is done via IGPs such as OSPF, but iBGP can be used if very large routing tables must be transferred between border routers.")),Object(n.b)("h3",{id:"bgp-requirements"},"BGP Requirements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ASN: You will need an ASN. You can request an ASN fro ARIN or your country's regional provider."),Object(n.b)("li",{parentName:"ul"},"You must have a multi-homed network or prove intention to obtain one."),Object(n.b)("li",{parentName:"ul"},"BGP4 capable router with sufficient hardware specs."),Object(n.b)("li",{parentName:"ul"},"Fully function IGP.")),Object(n.b)("h3",{id:"bgp---operation-and-keep-alive"},"BGP - Operation and Keep-Alive"),Object(n.b)("p",null,'BGP uses "Keep-Alive" signals and a configuratble timer to detect if a peer is down. If a peer goes down, it will remove the dead peer\'s route from its advertisements. AS routers continually talk back to each other.'),Object(n.b)("h3",{id:"bfd---bidirectional-forwarding-detection"},"BFD - Bidirectional Forwarding Detection"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'"Bidirectional Forwarding Detection". A UDP protocol used with BGP to assist in detecting link failures at a much faster rate than the native BGP failure detection.'),Object(n.b)("li",{parentName:"ul"},"BFD works with any routing protocol, not just BGP."),Object(n.b)("li",{parentName:"ul"},"BFD must be explicitly enabled to work properly.")),Object(n.b)("h3",{id:"bgp---multi-exit-discriminator"},"BGP - Multi-Exit Discriminator"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Allows the border router of an AS to tell neight ASes on which link it prefers to receive traffic."),Object(n.b)("li",{parentName:"ul"},"A low MED value is a higher preference and higher MED value is a lower preference."),Object(n.b)("li",{parentName:"ul"},"If there is a certain route that it wants to take eg. optic fibre, it wil take the preferred route. - There is a move preferred way to do this - ",Object(n.b)("inlineCode",{parentName:"li"},"AS_Path Prepending"))),Object(n.b)("h3",{id:"bgp---as_path-prepending"},"BGP - AS_Path Prepending"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"AS_Path Prepending: is how BGP routers can see full routes to other ASes. Each router prepends its ASN to the beginning of the list. This allows the router to see the most efficient route to its destination."),Object(n.b)("li",{parentName:"ul"},"It can also be used to artificially lengthen the path of your route in order to advertise to other routers that it is not a preferred route and influence these routers to send to another link."),Object(n.b)("li",{parentName:"ul"},"You can only do this with a public ASN."),Object(n.b)("li",{parentName:"ul"},'In a case where there are more hops between routers on a less preferred route, the router "creates" artificial hops to change the preference of the path.')))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/AWS/Advanced-Networking.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-aws-advanced-networking-md-b183a832a56c1eeae57c.js.map
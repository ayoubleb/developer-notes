(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{jw67:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/AWS/SysOps-Solutions-Architect.md"}});var b={_frontmatter:o},l=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"sysops"},"SysOps"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#sysops"}),"SysOps"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#networking"}),"Networking"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#networking-bottlenecks"}),"Networking Bottlenecks")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#dns-101"}),"DNS 101"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#top-level-domains"}),"Top Level Domains")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#domain-registrars"}),"Domain Registrars")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#soa-records"}),"SOA Records")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#ns-records"}),"NS Records")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#a-records"}),"A Records")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#ttl-record"}),"TTL Record")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#cnames"}),"CNAMES")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#alias-records"}),"Alias records")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#summary"}),"Summary")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#registering-a-domain-name"}),"Registering a Domain Name")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"#definitions"}),"Definitions"))))),Object(n.b)("h2",{id:"networking"},"Networking"),Object(n.b)("h3",{id:"networking-bottlenecks"},"Networking Bottlenecks"),Object(n.b)("p",null,"Increase network performance = increase instance size."),Object(n.b)("p",null,"EBS Throughput != network throughput. This is writing to disk as opposed to EC2 talking to each other within the same subnet."),Object(n.b)("h3",{id:"dns-101"},"DNS 101"),Object(n.b)("p",null,"DNS is used to convert human friendly domains to an ",Object(n.b)("inlineCode",{parentName:"p"},"Internet Protocol (IP)"),"."),Object(n.b)("p",null,"IPv4 is a 32 bit field and has 42 billion addresses."),Object(n.b)("p",null,"IPv6 has an address space of 128 bits. 340 undecillion addresses."),Object(n.b)("p",null,"The big issue at the moment is that everyone is still using IPv4 - this is driven by ISPs."),Object(n.b)("p",null,"Amazon previously did not have IPv6 support for backend systems. This changed around 2016."),Object(n.b)("h4",{id:"top-level-domains"},"Top Level Domains"),Object(n.b)("p",null,"The last word in the domain name is the top level eg. ",Object(n.b)("inlineCode",{parentName:"p"},".com"),", ",Object(n.b)("inlineCode",{parentName:"p"},".edu"),", ",Object(n.b)("inlineCode",{parentName:"p"},".gov")," etc."),Object(n.b)("p",null,"These are controlled by the ",Object(n.b)("inlineCode",{parentName:"p"},"Internet Assigne Numbers Authority (IANA)")," in a root zone database which is essentially a database of all available top level domains."),Object(n.b)("h4",{id:"domain-registrars"},"Domain Registrars"),Object(n.b)("p",null,"As all of these need to be unique, the domain registrar is an authority that can assign domain names directly under one or more top-level domains. These domains are registered with InterNIC, a service of ICANN, which enforces the uniqueness of domain names across the internet."),Object(n.b)("p",null,"Each domain becomes registered in a central database known as the ",Object(n.b)("inlineCode",{parentName:"p"},"WhoIS database"),"."),Object(n.b)("h4",{id:"soa-records"},"SOA Records"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Start of Authority")),Object(n.b)("li",{parentName:"ul"},"Name of the server that suppised the data for the zone."),Object(n.b)("li",{parentName:"ul"},"The administrator of the zone. (The owner)"),Object(n.b)("li",{parentName:"ul"},"Current version of the data file"),Object(n.b)("li",{parentName:"ul"},"Number of seconds a secondary name server should wait before checking for updates etc."),Object(n.b)("li",{parentName:"ul"},"Default TTL file on resource records")),Object(n.b)("h4",{id:"ns-records"},"NS Records"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Name Server records")," - used by ",Object(n.b)("inlineCode",{parentName:"li"},"Top Level Domain")," servers to direct traffic to the Content DNS server which contains the authoritative DNS records.")),Object(n.b)("h4",{id:"a-records"},"A Records"),Object(n.b)("p",null,'The "A" record is the fundamental type of DNS record. It stands for "Address". The A record is use by a computer to translate the name of the domain to the IP address.'),Object(n.b)("h4",{id:"ttl-record"},"TTL Record"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Time to Live")," - the length of time that the DNS server is cached either on the server or you PC."),Object(n.b)("p",null,"DNS records take time to propagate throughout the internet. Companies before a migration, they will drop the TTL down low. You may find that even two days later, at the time of the migration the DNS resolutions can head to the old or new server."),Object(n.b)("h4",{id:"cnames"},"CNAMES"),Object(n.b)("p",null,"A ",Object(n.b)("inlineCode",{parentName:"p"},"Canonical Name (CNAME)")," can be used to resolve one domain name to another. For example, you may have a mobile website with the domain name ",Object(n.b)("inlineCode",{parentName:"p"},"http://m.acloud.guru")," that is used for when users browse to your domain name on their mobile devices. You may also want ",Object(n.b)("inlineCode",{parentName:"p"},"http://mobile.acloud.guru")," to resolve to the same address."),Object(n.b)("h4",{id:"alias-records"},"Alias records"),Object(n.b)("p",null,"AWS specific. It is used to map resource record sets in your hosted zone to things like ELBs, CF distributions or S3 buckets."),Object(n.b)("p",null,"The difference, a CNAME can't be used for naked domain names (zone apex)."),Object(n.b)("h4",{id:"summary"},"Summary"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ELBs do not have a pre-defined IPv4 address - you need to resolve it using a DNS name."),Object(n.b)("li",{parentName:"ul"},"Understand the difference between an Alias Record and a CNAME."),Object(n.b)("li",{parentName:"ul"},"Given the choose, always choose an Alias Record over a CNAME. (No charge with Alias Record either)")),Object(n.b)("h3",{id:"registering-a-domain-name"},"Registering a Domain Name"),Object(n.b)("p",null,"Head to Route 53, select ",Object(n.b)("inlineCode",{parentName:"p"},"Register a Domain")," and go through the process of adding the domain to the cart and continue."),Object(n.b)("p",null,"Follow the process to go through with details for the SOA record and confirm the purchase."),Object(n.b)("h2",{id:"definitions"},"Definitions"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null})),Object(n.b)("th",i({parentName:"tr"},{align:null})))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"ENI"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Elastic Network Interface")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"EBS"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Elastic Block Store")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"DNS"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Domain Name System")))))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/AWS/SysOps-Solutions-Architect.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-aws-sys-ops-solutions-architect-md-332169e61bf5b073b9c8.js.map
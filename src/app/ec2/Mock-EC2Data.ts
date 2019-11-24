import {EC2Data} from './domain/ec2data';

// export const EC2DATA: EC2Data = {

// 	metadata: [{
// 		instanceId: "i-1234567890abcdef0",
// 		publicHostname: "ec2-67-202-51-224.compute-1.amazonaws.com",
// 		publicIPv4: "67.202.51.224",
// 		localHostname: "ip-10-251-50-36.ec2.internal",
// 		localIPv4: "10.251.50.36"
// 	}],
// 	tags: [{
// 		resourceType: "volume",
// 		resourceId: "vol-1234567890abcdef0",
// 		value: "Project1",
// 		key: "Purpose"
// 	}],
// 	volumes: [{
// 			availabilityZone: "us-east-1a",
// 			attachments: [{
// 				attachTime: "2013-12-18T22:35:00.000Z",
// 				instanceId: "i-1234567890abcdef0",
// 				volumeId: "vol-049df61146c4d7901",
// 				state: "attached",
// 				deleteOnTermination: true,
// 				device: "/dev/sda1"
// 			}],
// 			encrypted: false,
// 			volumeType: "gp2",
// 			volumeId: "vol-049df61146c4d7901",
// 			state: "in-use",
// 			iops: 0,
// 			snapshotId: "snap-1234567890abcdef0",
// 			createTime: "2013-12-18T22:35:00.084Z",
// 			size: 8
// 		},
// 		{
// 			availabilityZone: "us-east-1a",
// 			attachments: [],
// 			encrypted: false,
// 			volumeType: "gp2",
// 			volumeId: "vol-1234567890abcdef0",
// 			state: "available",
// 			iops: 1000,
// 			snapshotId: null,
// 			createTime: "2014-02-27T00:02:41.791Z",
// 			size: 100
// 		}
// 	]
// }
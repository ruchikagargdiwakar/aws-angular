import {EC2DataAttachment} from './ec2dataattachment';

export class EC2DataVolume {
    availabilityZone: string;
	attachments: EC2DataAttachment[];
	encrypted: string;
	volumeType: string;
	volumeId: string;
	state: string;
	iops: number;
	snapshotId: string;
	createTime: string;
	size: number;
  }
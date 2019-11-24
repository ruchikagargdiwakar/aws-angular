import {EC2DataMetadata} from './ec2datametadata';
import {EC2DataTag} from './ec2datatag';
import {EC2DataVolume} from './ec2datavolume';

export class EC2DataDetails {
    metadata: EC2DataMetadata[];
    tags: EC2DataTag[];
    volumes: EC2DataVolume[];
}
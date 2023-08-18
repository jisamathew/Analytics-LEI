import { Injectable } from '@angular/core';
// import { Web3Storage, getFilesFromPath } from 'web3.storage'
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGM4NGM0NkVlRGRFOGU0NUVEQkY2NkRmMTM5RWI1Y2UyQkI3YjAyMzciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTAyMTUwMTg5MjAsIm5hbWUiOiJkYXRhX2FuYWx5dGljcyJ9.RewP_qDD4SRl1wCDb8gK4QAtiRCjLdivu26g5qFZOec"

// const token = process.env.API_TOKEN

declare var require;

@Injectable({
    providedIn: 'root'
})
export class Web3StorageService {
    private client = new Web3Storage({ token })

    constructor() { }

    public async storeFile(file) {
        console.log(file)
        // const files = await getFilesFromPath('/path/to/file')
        // const cid = await this.client.put(files)
        // console.log(cid)
        
        //File upload
        // Pack files into a CAR and send to web3.storage
        // const rootCid = await this.client.put(file, {
        //     name: 'data_analytics_register_datas',
        //     maxRetries: 3,
        // });
        //save json object
        const blob = new Blob([JSON.stringify(file)], { type: 'application/json' })

        const files = [
          new File(['user-registering-content'], 'plain-utf8.txt'),
          new File([blob], 'data_analytics_register_data.json')
        ]
        const rootCid = await this.client.put(files);
        console.log(rootCid)
        return rootCid;
    }
    public async retrieveFile(rootCid) {
        // const cid =
        //     'bafybeidd2gyhagleh47qeg77xqndy2qy3yzn4vkxmk775bg2t5lpuy7pcu'

        // const res = await this.client.get(cid)
        // const files = await res.files()

        // for (const file of files) {
        //     console.log(`${file.cid}: ${file.name} (${file.size} bytes)`)
        // }
        const res = await this.client.get(rootCid); // Web3Response
const files = await res.files(); // Web3File[]
for (const file of files) {
  console.log(`${file.cid} ${file.name} ${file.size}`);
}
return files;

    }
    //  async getHashFromIPFS(id){
    //   this.ipfsHash = await this.ipfs.cat(id);
    //   console.log(this.ipfsHash)
    //   return this.ipfsHash.next();
    // }

}

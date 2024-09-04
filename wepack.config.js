import { path } from "path"; 

export default{
  entry: './src/index.js',
  filename: 'bundle.js',
  path: path.resolce('dist')
}
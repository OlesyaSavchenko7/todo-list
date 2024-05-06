import {ResolveOptions} from 'webpack';
import { BuildOptions } from './types/config';


export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['node_modules'],
        mainFiles: ['index'],
        alias: {
            src: options.paths.src,
        },
    }
}

// Fichier où vous utilisez ExpressInterface
import { ExpressInterface } from '../interfaces/ExpressInterface';

const home = ({ req, res, next }: ExpressInterface) => {
return res.status(200).json({ message: 'Hello World !' });
};
  
export { home };
 
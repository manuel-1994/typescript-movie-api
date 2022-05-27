import  BaseRouter  from '../config/base.router';
import { MovieController } from '../controllers';
import schemaValidation from '../middlewares/schemaValidator';
import { CreateMovieSchema, UpdateMovieSchema } from '../schemas/movie.schema';

export default class MovieRouter extends BaseRouter<MovieController>{
  constructor(){
    super(MovieController);
  }
  
  protected routes(): void {
    this.router.get('/movies', this.controller.getMovies);
    this.router.get('/movie',this.controller.getMovie);
    this.router.post('/createMovie',schemaValidation(CreateMovieSchema), this.controller.createMovie);
    this.router.put('/updateMovie/:id',schemaValidation(UpdateMovieSchema), this.controller.updateMovie);
    this.router.delete('/deleteMovie/:id', this.controller.deleteMovie);
  }
}
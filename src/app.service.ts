import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  cardapio(): string {
    return 'Marcia-Gastro';
  }
}

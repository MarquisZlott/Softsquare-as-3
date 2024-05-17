import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractMessage',
  standalone: true
})
export class ExtractMessagePipe implements PipeTransform {
  transform(value: any): any {
    if (value && value.message) {
      return value.message;
    }
    return null;
  }
}

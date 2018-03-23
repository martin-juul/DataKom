import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {
  transform(value) {
    return value.split('< ').join('<');
  }
}

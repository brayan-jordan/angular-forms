import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class ViaCepService {
  url_API = "http://viacep.com.br/ws/";
  constructor(private httpClient: HttpClient) {}

  getConsultaCep(cep: string) {
    return this.httpClient.get(`${this.url_API}/${cep}/json`);
  }
}

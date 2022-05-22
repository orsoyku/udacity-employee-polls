import { _getUsers, _getQuestions, _saveQuestion } from "./data";

export function getUsers(info) {
  return _getUsers(info);
}

export function getQuestions(info) {
  return _getQuestions(info);
}

export function saveQuestion(info) {
  return _saveQuestion(info);
}

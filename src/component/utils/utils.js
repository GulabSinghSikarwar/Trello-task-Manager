import critical from '../../icons/jira_priority/critical.svg'
import blocker from '../../icons/jira_priority/blocker.svg'
import medium from '../../icons/jira_priority/medium.svg'
import low from '../../icons/jira_priority/low.svg'
import high from '../../icons/jira_priority/high.svg'
import { Priority } from './app.enum'
export const getRequestParams = (reqBody, method) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqBody)

  }
}
export const messageColor = {
  success: 'success',
  error: 'danger',
  warning: 'warning'
}
export const piorityIcon = (priority) => {

  switch (priority) {
    case Priority.HIGH:
      return high;
    case Priority.LOW:
      return low;
    case Priority.CRITICAL:
      return critical;
    case Priority.MEDIUM:
      return medium
  }
}
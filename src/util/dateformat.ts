import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)

export const formatDate = (date: string) => {
  return dayjs(date).format('D[ de ]MMM[, ]YYYY')
}
